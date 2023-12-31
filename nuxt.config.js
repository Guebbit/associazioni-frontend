export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000',
		apiUrl: process.env.API_URL || 'localhost',
		enviroment: process.env.ENVIROMENT || 'production',
	},

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'associazioni default title',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			// Internet Explorer visualizza come Edge
			{ 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
			// WindowsPhone disabilità highlight dei link su mobile
			{ name: 'msapplication-tap-highlight', content: 'no' },
		],
		script: []
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		/*
		['@nuxtjs/gtm', {
			id: 'GTM-PXX6WJH'
		}]
		*/
		['@nuxtjs/vuetify', {
			treeShake: true,
		}],
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://github.com/nuxt-community/svg-module
		'@nuxtjs/svg',
		//'@bazzite/nuxt-optimized-images',	// https://github.com/bazzite/nuxt-optimized-images
		['nuxt-i18n', {						// https://github.com/nuxt-community/nuxt-i18n
			baseUrl: 'https://ecsicarpi.it',
			locales: [
				{
					code: 'it',
					iso: 'it-IT',
					file: 'it.json'
				}
			],
			lazy: true,
			langDir: 'locales/',
			defaultLocale: 'it',
			//detectBrowserLanguage: true
		}]
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		extractCSS: true,
		extend (config, ctx) {
			config.module.rules.push({
				test: /\.(ico|xml|webmanifest)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name]-[hash:7].[ext]'
				}
			});
		}
	},
}
