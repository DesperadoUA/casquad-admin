export default {
	head() {
		return {
			title: this.data.body.meta_title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.data.body.description,
					'data-qmeta': 'description'
				},
				{
					name: 'title',
					content: this.data.body.meta_title,
					'data-qmeta': 'title'
				},
				{
					name: 'mobile-web-app-capable',
					content: 'yes'
				},
				{
					name: 'apple-mobile-web-app-status-bar-style',
					content: 'black-translucent'
				},
				{
					name: 'keywords',
					content: this.data.body.keywords,
					'data-qmeta': 'keywords'
				},
				{
					property: 'og:locale',
					content: 'ca',
					'data-qmeta': 'ogLocale'
				},
				{
					property: 'og:site_name',
					content: 'Casquad',
					'data-qmeta': 'ogSiteName'
				},
				{
					property: 'og:type',
					content: 'Page',
					'data-qmeta': 'ogType'
				},
				{
					property: 'og:title',
					content: this.data.body.meta_title,
					'data-qmeta': 'ogTitle'
				},
				{
					property: 'og:description',
					content: this.data.body.description,
					'data-qmeta': 'ogDescription'
				},
				{
					property: 'og:url',
					content: this.data.body.currentUrl,
					'data-qmeta': 'ogUrl'
				},
				{
					property: 'og:image',
					content: this.data.body.social_img || 'https://casquads.com/img/logo-2.svg'
				},
				{
					property: 'og:image:secure_url',
					content: this.data.body.social_img || 'https://casquads.com/img/logo-2.svg'
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					name: 'twitter:url',
					content: this.data.body.currentUrl
				},
				{
					name: 'twitter:title',
					content: this.data.body.meta_title
				},
				{
					name: 'twitter:description',
					content: this.data.body.description
				},
				{
					name: 'twitter:image',
					content: this.data.body.social_img || 'https://casquads.com/img/logo-2.svg'
				},
				{
					name: 'apple-mobile-web-app-title',
					content: this.data.body.meta_title,
					'data-qmeta': 'AppleMobileWebAppTitle'
				},
				{
					name: 'apple-mobile-web-app-capable',
					content: 'yes',
					'data-qmeta': 'AppleMobileWebAppCapable'
				}
			],
			link: [
				{ rel: 'canonical', href: this.data.body.currentUrl },
				{
					rel: 'alternate',
					hreflang: 'en',
					href: this.data.body.currentUrl,
					'data-qmeta': 'alternateEn'
				},
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}
			]
		}
	}
}
