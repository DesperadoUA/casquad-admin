import CategoryLoop from '~/components/templates/categoryLoop'
import TotalPosts from '~/components/templates/totalPosts'
import MM_Paginations from '~/components/lib/MM_Paginations'
import Search from '~/components/templates/search.vue'

export default {
	layout: 'admin',
	component: { CategoryLoop, TotalPosts, MM_Paginations, Search },
	async mounted() {
		this.data.ru.posts = []
		this.data.ua.posts = []
		const user = this.$store.getters['user/getUser']
		const page = this.$store.getters[this.POST_TYPE + '/getPage']
		const dataRu = {
			session: user.session,
			id: user.id,
			lang: 1,
			limit: this.numnerPostOnPage,
			offset: (page.ru - 1) * this.numnerPostOnPage
		}
		await this.$store.dispatch(this.POST_TYPE + '/setPosts', dataRu)
		const dataUa = {
			session: user.session,
			id: user.id,
			lang: 2,
			limit: this.numnerPostOnPage,
			offset: (page.ua - 1) * this.numnerPostOnPage
		}
		await this.$store.dispatch(this.POST_TYPE + '/setPosts', dataUa)
		const list = this.$store.getters[this.POST_TYPE + '/getPosts']
		this.data.ru.posts = list.ru
		this.data.ua.posts = list.ua

		const total = this.$store.getters[this.POST_TYPE + '/getTotal']
		this.data.ru.total = total.ru
		this.data.ua.total = total.ua
	},
	data() {
		return {
			tab: null,
			numberPostOnPage: 8
		}
	},
	computed: {
		postsRu() {
			const list = this.$store.getters[this.POST_TYPE + '/getPosts']
			this.data.ru.posts = list.ru
			return this.data.ru.posts
		},
		postsUa() {
			const list = this.$store.getters[this.POST_TYPE + '/getPosts']
			this.data.ua.posts = list.ua
			return this.data.ua.posts
		}
	}
}
