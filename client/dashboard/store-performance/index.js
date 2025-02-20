/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { getPersistedQuery } from '@woocommerce/navigation';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { withSelect } from '@wordpress/data';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import {
	EllipsisMenu,
	MenuItem,
	MenuTitle,
	SectionHeader,
	SummaryList,
	SummaryListPlaceholder,
	SummaryNumber,
} from '@woocommerce/components';
import { getDateParamsFromQuery } from '@woocommerce/date';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import './style.scss';
import { CurrencyContext } from '../../lib/currency-context';
import { getIndicatorData, getIndicatorValues } from './utils';

const { performanceIndicators: indicators } = getSetting( 'dataEndpoints', {
	performanceIndicators: [],
} );

class StorePerformance extends Component {
	renderMenu() {
		const {
			hiddenBlocks,
			isFirst,
			isLast,
			onMove,
			onRemove,
			onTitleBlur,
			onTitleChange,
			onToggleHiddenBlock,
			titleInput,
			controls: Controls,
		} = this.props;

		return (
			<EllipsisMenu
				label={ __(
					'Choose which analytics to display and the section name',
					'woocommerce-admin'
				) }
				renderContent={ ( { onToggle } ) => (
					<Fragment>
						<MenuTitle>
							{ __( 'Display stats:', 'woocommerce-admin' ) }
						</MenuTitle>
						{ indicators.map( ( indicator, i ) => {
							const checked = ! hiddenBlocks.includes(
								indicator.stat
							);
							return (
								<MenuItem
									checked={ checked }
									isCheckbox
									isClickable
									key={ i }
									onInvoke={ () => {
										onToggleHiddenBlock( indicator.stat )();
										recordEvent( 'dash_indicators_toggle', {
											status: checked ? 'off' : 'on',
											key: indicator.stat,
										} );
									} }
								>
									{ indicator.label }
								</MenuItem>
							);
						} ) }
						<Controls
							onToggle={ onToggle }
							onMove={ onMove }
							onRemove={ onRemove }
							isFirst={ isFirst }
							isLast={ isLast }
							onTitleBlur={ onTitleBlur }
							onTitleChange={ onTitleChange }
							titleInput={ titleInput }
						/>
					</Fragment>
				) }
			/>
		);
	}

	renderList() {
		const {
			query,
			primaryRequesting,
			secondaryRequesting,
			primaryError,
			secondaryError,
			primaryData,
			secondaryData,
			userIndicators,
			defaultDateRange,
		} = this.props;
		if ( primaryRequesting || secondaryRequesting ) {
			return (
				<SummaryListPlaceholder
					numberOfItems={ userIndicators.length }
				/>
			);
		}

		if ( primaryError || secondaryError ) {
			return null;
		}

		const persistedQuery = getPersistedQuery( query );

		const { compare } = getDateParamsFromQuery( query, defaultDateRange );
		const prevLabel =
			compare === 'previous_period'
				? __( 'Previous period:', 'woocommerce-admin' )
				: __( 'Previous year:', 'woocommerce-admin' );
		const { formatAmount, getCurrencyConfig } = this.context;
		const currency = getCurrencyConfig();
		return (
			<SummaryList>
				{ () =>
					userIndicators.map( ( indicator, i ) => {
						const {
							primaryValue,
							secondaryValue,
							delta,
							reportUrl,
							reportUrlType,
						} = getIndicatorValues( {
							indicator,
							primaryData,
							secondaryData,
							currency,
							formatAmount,
							persistedQuery,
						} );

						return (
							<SummaryNumber
								key={ i }
								href={ reportUrl }
								hrefType={ reportUrlType }
								label={ indicator.label }
								value={ primaryValue }
								prevLabel={ prevLabel }
								prevValue={ secondaryValue }
								delta={ delta }
								onLinkClickCallback={ () => {
									recordEvent( 'dash_indicators_click', {
										key: indicator.stat,
									} );
								} }
							/>
						);
					} )
				}
			</SummaryList>
		);
	}

	render() {
		const { userIndicators, title } = this.props;
		return (
			<Fragment>
				<SectionHeader
					title={
						title || __( 'Store Performance', 'woocommerce-admin' )
					}
					menu={ this.renderMenu() }
				/>
				{ userIndicators.length > 0 && (
					<div className="woocommerce-dashboard__store-performance">
						{ this.renderList() }
					</div>
				) }
			</Fragment>
		);
	}
}

StorePerformance.contextType = CurrencyContext;

export default compose(
	withSelect( ( select, props ) => {
		const { hiddenBlocks, query, filters } = props;
		const userIndicators = indicators.filter(
			( indicator ) => ! hiddenBlocks.includes( indicator.stat )
		);
		const { woocommerce_default_date_range: defaultDateRange } = select(
			SETTINGS_STORE_NAME
		).getSetting( 'wc_admin', 'wcAdminSettings' );

		const data = {
			hiddenBlocks,
			userIndicators,
			indicators,
			defaultDateRange,
		};
		if ( userIndicators.length === 0 ) {
			return data;
		}
		const indicatorData = getIndicatorData(
			select,
			userIndicators,
			query,
			filters
		);

		return {
			...data,
			...indicatorData,
		};
	} )
)( StorePerformance );
