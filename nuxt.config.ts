import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: ['@nuxt/eslint', '@nuxt/fonts'],

	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	devtools: { enabled: true },

	css: ['./app/assets/css/main.css'],
	compatibilityDate: '2025-07-15',

	vite: {
		plugins: [tailwindcss()],
	},
	typescript: {
		typeCheck: true,
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
		checker: {
			eslintPath: 'eslint',
		},
	},

	fonts: {
		families: [
			{
				name: 'Public Sans',
				provider: 'google',
				weights: ['300', '400', '600', '700', '900'],
			},
			{
				name: 'Inter',
				provider: 'google',
				weights: ['300', '400', '600', '700', '900'],
			},
		],
	},
});
