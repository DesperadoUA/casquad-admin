import commonEdit from '~/components/templates/commonEdit'
import snackBar from '~/components/templates/snackbar'
import postPreview from '~/components/lib/MM_Post_Preview'
import relative from '~/components/templates/relative'
import confirmDelete from '~/components/templates/confirmDelete'

export default {
	layout: 'admin',
	components: { commonEdit, snackBar, postPreview, relative, confirmDelete },
	data() {
		return {
			data: {
				body: undefined
			},
			snackbar: {
				status: false,
				text: 'Post Update',
				timeout: 5000
			},
			confirmDeleteIsShow: false
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
		postDelete() {
			this.confirmDeleteIsShow = true
		},
		async confirmDelete() {
			const user = this.$store.getters['user/getUser']
			const data = {
				session: user.session,
				id: user.id,
				data: this.$route.params.id
			}
			await this.$store.dispatch(this.POST_TYPE + '/deleteCurrentPost', data)
			const confirmDelete = this.$store.getters[this.POST_TYPE + '/getConfirmDelete']
			if (confirmDelete) this.$router.push('/admin/' + this.POST_TYPE)
		},
		cancel() {
			this.confirmDeleteIsShow = false
		}
	}
}
