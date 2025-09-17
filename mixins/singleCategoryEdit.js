import commonEdit from '~/components/templates/commonEdit'
import adminCategoryRelative from '~/components/templates/adminCategoryRelative'
import snackBar from '~/components/templates/snackbar'
import postMeta from '~/components/templates/meta/Category'
import postPreview from '~/components/lib/MM_Post_Preview'

export default {
	layout: 'admin',
	components: { commonEdit, snackBar, adminCategoryRelative, postMeta, postPreview },
	data() {
		return {
			data: {
				body: undefined
			},
			snackbar: {
				status: false,
				text: 'Post Update',
				timeout: 5000
			}
		}
	},
	methods: {
		async update() {
			const user = this.$store.getters['user/getUser']
			const data = {
				session: user.session,
				id: user.id,
				data: this.$store.getters[this.POST_TYPE + '/getCurrentPost']
			}
			await this.$store.dispatch(this.POST_TYPE + '/updateCurrentPost', data)
			this.snackbar.status = true
			setTimeout(() => {
				this.snackbar.status = false
			}, this.snackbar.timeout)
		},
		async postDelete() {
			const user = this.$store.getters['user/getUser']
			const data = {
				session: user.session,
				id: user.id,
				data: this.$route.params.id
			}
			await this.$store.dispatch(this.POST_TYPE + '/deleteCurrentPost', data)
			const confirmDelete = this.$store.getters[this.POST_TYPE + '/getConfirmDelete']
			if (confirmDelete) this.$router.push('/admin/' + this.PATH_CATEGORY)
		}
	},
	async mounted() {
		const user = this.$store.getters['user/getUser']
		const data = {
			session: user.session,
			id: user.id,
			url: this.$route.params.id
		}
		await this.$store.dispatch(this.POST_TYPE + '/setCurrentPost', data)
		this.data.body = this.$store.getters[this.POST_TYPE + '/getCurrentPost']
	}
}
