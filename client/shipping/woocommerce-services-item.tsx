/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { Button, ExternalLink } from '@wordpress/components';
import { Pill } from '@woocommerce/components';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';
import { getAdminLink, getSetting } from '@woocommerce/wc-admin-settings';
/**
 * Internal dependencies
 */
import './woocommerce-services-item.scss';
import WooIcon from './woo-icon.svg';

const WooCommerceServicesItem: React.FC< {
	pluginsBeingSetup: Array< string >;
	onSetupClick: ( slugs: string[] ) => PromiseLike< void >;
} > = ( { onSetupClick, pluginsBeingSetup } ) => {
	const wcAdminAssetUrl = getSetting( 'wcAdminAssetUrl', '' );
	const { createSuccessNotice } = useDispatch( 'core/notices' );

	const isSiteConnectedToJetpack = useSelect( ( select ) =>
		select( PLUGINS_STORE_NAME ).isJetpackConnected()
	);

	const handleSetupClick = () => {
		onSetupClick( [ 'woocommerce-services' ] ).then( () => {
			const actions = [];
			if ( ! isSiteConnectedToJetpack ) {
				actions.push( {
					url: getAdminLink( 'plugins.php' ),
					label: __(
						'Finish the setup by connecting your store to Jetpack.',
						'woocommerce-admin'
					),
				} );
			}

			createSuccessNotice(
				__(
					'🎉 WooCommerce Shipping is installed!',
					'woocommerce-admin'
				),
				{
					actions,
				}
			);
		} );
	};

	return (
		<div className="woocommerce-list__item-inner woocommerce-services-item">
			<div className="woocommerce-list__item-before">
				<img
					className="woocommerce-services-item__logo"
					src={ WooIcon }
					alt=""
				/>
			</div>
			<div className="woocommerce-list__item-text">
				<span className="woocommerce-list__item-title">
					{ __( 'Woocommerce Shipping', 'woocommerce-admin' ) }
					<Pill>{ __( 'Recommended', 'woocommerce-admin' ) }</Pill>
				</span>
				<span className="woocommerce-list__item-content">
					{ __(
						'Print USPS and DHL Express labels straight from your WooCommerce dashboard and save on shipping.',
						'woocommerce-admin'
					) }
					<br />
					<ExternalLink href="https://woocommerce.com/woocommerce-shipping/">
						{ __( 'Learn more', 'woocommerce-admin' ) }
					</ExternalLink>
				</span>
			</div>
			<div className="woocommerce-list__item-after">
				<Button
					isSecondary
					onClick={ handleSetupClick }
					isBusy={ pluginsBeingSetup.includes(
						'woocommerce-services'
					) }
					disabled={ pluginsBeingSetup.length > 0 }
				>
					{ __( 'Get started', 'woocommerce-admin' ) }
				</Button>
			</div>
		</div>
	);
};

export default WooCommerceServicesItem;
