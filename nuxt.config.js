/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: 'starter',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',  rel: 'stylesheet'}
		]
	},
	modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    [
      'nuxt-validate', {
        lang: 'ru'
      }
    ]
  ],
  loading: 'components/Loading.vue',
	router: {
		linkActiveClass: 'active',

	},
	plugins: [
		'~/plugins/vuebar',
    { src: '~/plugins/carousel', ssr: false },
		{ src: '~/plugins/map', ssr: true }
	],
	/*
  ** Global CSS
  */
	css: [
	  { src: '~/assets/sass/main.sass', lang: 'sass' }
	],
	/*
  ** Add axios globally
  */
	build: {
		vendor: [
			'vue-yandex-maps',
      '~/plugins/carousel'
		],
		extractCSS: true,
		//vendor: ['vuebar'],
		/*
    ** Run ESLINT on save
    */
		extend (config, ctx) {
			if (ctx.isClient) {
				/* config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
					options: {
						fix: true
					}
				}) */
			}
		}
	}
}
