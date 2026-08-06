<template>
	<div>
		<commonAddStaticPage
			v-if="data.body"
			:data="data.body"
			action="static_pages/changeStateNewPost"
		/>
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-5 mb-10">
					<v-btn class="font-podkova-bold deep-orange darken-2" text @click="add()">
						<v-icon left color="white">mdi-folder-plus</v-icon>
						Add
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import commonAddStaticPage from '~/components/templates/commonAddStaticPage.vue'
export default {
	name: 'singleStaticPageAdd',
	layout: 'admin',
	components: { commonAddStaticPage },
	mounted() {
		this.data.body = {
			title: '',
			permalink: '',
			status: 'public',
			lang: 'ru',
			h1: '',
			meta_title: '',
			description: '',
			keywords: '',
			robots: 'index,follow',
			short_desc: '',
			content: '',
			thumbnail: '',
			social_img: '',
			faq: [],
			faq_title: '',
			author_summary: '',
			content_1: '',
			content_2: '',
			content_3: '',
			content_4: '',
			content_5: '',
			content_6: '',
			content_7: '',
			content_8: '',
			content_9: '',
			content_10: '',
			content_11: '',
			content_12: '',
			content_13: '',
			content_14: '',
			content_15: '',
			casino_ref: [],
			pros: [],
			cons: [],
			pros_cons_title: '',
			pros_title: '',
			cons_title: '',
			screenshots: [],
			screenshots_title: ''
		}
		this.$store.dispatch('static_pages/setNewPost', this.data.body)
	},
	data() {
		return {
			data: {
				body: undefined
			}
		}
	},
	methods: {
		async add() {
			const user = this.$store.getters['user/getUser']
			const post = { ...this.$store.getters['static_pages/getNewPost'] }
			if (!post.title) {
				alert('Title empty')
				return
			}
			if (!post.permalink) {
				alert('Permalink empty')
				return
			}
			// односегментный URL — слеши на create не отправляем
			post.permalink = String(post.permalink)
				.replace(/^\/+|\/+$/g, '')
				.replace(/\//g, '-')
			const data = {
				session: user.session,
				id: user.id,
				data: post
			}
			await this.$store.dispatch('static_pages/addNewPost', data)
			const insertId = this.$store.getters['static_pages/getInsertId']
			if (insertId !== '') this.$router.push(`/admin/static-pages/${insertId}`)
		}
	}
}
</script>
