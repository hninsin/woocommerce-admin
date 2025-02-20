/**
 * Boolean determining if environment is development.
 */
export const isDevelopmentMode = process.env.NODE_ENV === 'development';

interface generalSettings {
	woocommerce_default_country: string;
}

interface preloadSettings {
	general: generalSettings;
}

interface wcSettings {
	preloadSettings: preloadSettings;
}
declare global {
	interface Window {
		wcSettings: wcSettings;
	}
}
