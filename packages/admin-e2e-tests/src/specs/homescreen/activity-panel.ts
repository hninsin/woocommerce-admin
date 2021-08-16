/**
 * External dependencies
 */
import { createSimpleProduct, withRestApi } from '@woocommerce/e2e-utils';

/**
 * Internal dependencies
 */
import { Login } from '../../pages/Login';
import { OnboardingWizard } from '../../pages/OnboardingWizard';
import { WcHomescreen } from '../../pages/WcHomescreen';
import { createOrder, removeAllOrders, updateOption } from '../../fixtures';
import { OrdersActivityPanel } from '../../elements/OrdersActivityPanel';

/* eslint-disable @typescript-eslint/no-var-requires */
const { afterAll, beforeAll, describe, it } = require( '@jest/globals' );
/* eslint-enable @typescript-eslint/no-var-requires */

const simpleProductName = 'Simple order';
const testAdminHomescreenActivityPanel = () => {
	describe( 'Homescreen activity panel', () => {
		const profileWizard = new OnboardingWizard( page );
		const homeScreen = new WcHomescreen( page );
		const ordersPanel = new OrdersActivityPanel( page );
		const login = new Login( page );

		beforeAll( async () => {
			await login.login();

			// This makes this test more isolated, by always navigating to the
			// profile wizard and skipping, this behaves the same as if the
			// profile wizard had not been run yet and the user is redirected
			// to it when trying to go to wc-admin.
			await withRestApi.deleteAllProducts();
			await removeAllOrders();
			await updateOption( 'woocommerce_task_list_hidden', 'no' );
			await profileWizard.navigate();
			await profileWizard.skipStoreSetup();

			await homeScreen.isDisplayed();
			await homeScreen.possiblyDismissWelcomeModal();
		} );

		afterAll( async () => {
			await withRestApi.deleteAllProducts();
			await removeAllOrders();
			await updateOption( 'woocommerce_task_list_hidden', 'no' );
			await login.logout();
		} );

		it( 'should not show activity panel while task list is displayed', async () => {
			expect( await homeScreen.isActivityPanelShown() ).toBe( false );
		} );

		it( 'should not show panels when there are no orders or products yet with task list hidden', async () => {
			await homeScreen.hideTaskList();
			expect( await homeScreen.isTaskListDisplayed() ).toBe( false );
			expect( await homeScreen.isActivityPanelShown() ).toBe( false );
		} );

		it( 'should show Reviews panel when we have at-least one product', async () => {
			await createSimpleProduct( simpleProductName, '9.99' );
			await page.reload( {
				waitUntil: [ 'networkidle0', 'domcontentloaded' ],
			} );
			const activityPanels = await homeScreen.getActivityPanels();
			expect( activityPanels.length ).toBe( 1 );
			expect(
				activityPanels.findIndex( ( p ) => p.title === 'Reviews' )
			).toBeGreaterThanOrEqual( 0 );
		} );

		it( 'should show Orders and Stock panels when at-least one order is added', async () => {
			await createOrder();
			await page.reload( {
				waitUntil: [ 'networkidle0', 'domcontentloaded' ],
			} );
			const activityPanels = await homeScreen.getActivityPanels();
			expect( activityPanels.length ).toBe( 3 );
			expect(
				activityPanels.findIndex( ( p ) => p.title === 'Orders' )
			).toBeGreaterThanOrEqual( 0 );
			expect(
				activityPanels.findIndex( ( p ) => p.title === 'Stock' )
			).toBeGreaterThanOrEqual( 0 );
		} );

		describe( 'Orders panel', () => {
			it( 'should show: "you have fullfilled all your orders" when expanding Orders panel if no actionable orders', async () => {
				await homeScreen.expandActivityPanel( 'Orders' );
				expect( page ).toMatchElement( 'h4', {
					text: 'You’ve fulfilled all your orders',
				} );
			} );

			it( 'should show actionable Orders when expanding Orders panel', async () => {
				const order1 = await createOrder( 'processing' );
				const order2 = await createOrder( 'on-hold' );
				await homeScreen.navigate();
				await homeScreen.expandActivityPanel( 'Orders' );
				const orders = await ordersPanel.getDisplayedOrders();
				expect( orders.length ).toBe( 2 );
				expect( orders ).toContain( `Order #${ order1.id }` );
				expect( orders ).toContain( `Order #${ order2.id }` );
			} );
		} );
	} );
};

module.exports = { testAdminHomescreenActivityPanel };
