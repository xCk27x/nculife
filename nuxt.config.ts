// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/eslint'],
	app: {
		head: {
			title: '2023 新生知訊網',
			link: [
				{
					rel: 'icon',
					href: '/favicon.gif',
				},
			],
		},
	},
});
