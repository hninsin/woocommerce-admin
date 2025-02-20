/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Form, H, TextControl } from '@woocommerce/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { registerPlugin } from '@wordpress/plugins';
import { useDispatch, useSelect } from '@wordpress/data';
import { WooPaymentGatewaySetup } from '@woocommerce/onboarding';

const initialFormValues = {
	account_name: '',
	account_number: '',
	bank_name: '',
	sort_code: '',
	iban: '',
	bic: '',
};

const BacsPaymentGatewaySetup = () => {
	const isUpdating = useSelect( ( select ) => {
		return select( OPTIONS_STORE_NAME ).isOptionsUpdating();
	} );
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );

	const validate = ( values ) => {
		const errors = {};

		if ( ! values.account_number && ! values.iban ) {
			errors.account_number = errors.iban = __(
				'Please enter an account number or IBAN',
				'woocommerce-admin'
			);
		}

		return errors;
	};

	const updateSettings = async ( values, markConfigured ) => {
		const update = await updateOptions( {
			woocommerce_bacs_settings: {
				enabled: 'yes',
			},
			woocommerce_bacs_accounts: [ values ],
		} );

		if ( update.success ) {
			markConfigured();
			createNotice(
				'success',
				__(
					'Direct bank transfer details added successfully',
					'woocommerce-admin'
				)
			);
			return;
		}

		createNotice(
			'error',
			__(
				'There was a problem saving your payment settings',
				'woocommerce-admin'
			)
		);
	};

	return (
		<>
			<WooPaymentGatewaySetup id="bacs">
				{ ( { markConfigured } ) => {
					return (
						<Form
							initialValues={ initialFormValues }
							onSubmit={ ( values ) =>
								updateSettings( values, markConfigured )
							}
							validate={ validate }
						>
							{ ( { getInputProps, handleSubmit } ) => {
								return (
									<>
										<H>
											{ __(
												'Add your bank details',
												'woocommerce-admin'
											) }
										</H>
										<p>
											{ __(
												'These details are required to receive payments via bank transfer',
												'woocommerce-admin'
											) }
										</p>
										<div className="woocommerce-task-payment-method__fields">
											<TextControl
												label={ __(
													'Account name',
													'woocommerce-admin'
												) }
												required
												{ ...getInputProps(
													'account_name'
												) }
											/>
											<TextControl
												label={ __(
													'Account number',
													'woocommerce-admin'
												) }
												required
												{ ...getInputProps(
													'account_number'
												) }
											/>
											<TextControl
												label={ __(
													'Bank name',
													'woocommerce-admin'
												) }
												required
												{ ...getInputProps(
													'bank_name'
												) }
											/>
											<TextControl
												label={ __(
													'Sort code',
													'woocommerce-admin'
												) }
												required
												{ ...getInputProps(
													'sort_code'
												) }
											/>
											<TextControl
												label={ __(
													'IBAN',
													'woocommerce-admin'
												) }
												required
												{ ...getInputProps( 'iban' ) }
											/>
											<TextControl
												label={ __(
													'BIC / Swift',
													'woocommerce-admin'
												) }
												required
												{ ...getInputProps( 'bic' ) }
											/>
										</div>
										<Button
											isPrimary
											isBusy={ isUpdating }
											onClick={ handleSubmit }
										>
											{ __(
												'Save',
												'woocommerce-admin'
											) }
										</Button>
									</>
								);
							} }
						</Form>
					);
				} }
			</WooPaymentGatewaySetup>
		</>
	);
};

registerPlugin( 'wc-admin-payment-gateway-setup-bacs', {
	render: BacsPaymentGatewaySetup,
	scope: 'woocommerce-admin',
} );
