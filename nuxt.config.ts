// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'author', content: 'Leandro Afonso' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'format-detection', content: 'telephone=no' }
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap' }
			]
		}
	}
})
