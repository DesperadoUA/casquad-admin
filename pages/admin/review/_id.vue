<template>
	<div>
		<reviewEdit v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'"> </reviewEdit>
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-5 mb-10">
					<v-btn class="font-podkova-bold deep-orange darken-2" text @click="update()">
						<v-icon left color="white">mdi-content-save</v-icon>
						Update
					</v-btn>
					<v-btn class="font-podkova-bold deep-orange darken-2 ml-5" text @click="postDelete()">
						<v-icon left color="white">mdi-delete</v-icon>
						Delete
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
		<snackBar :status="snackbar.status" :text="snackbar.text" :timeout="snackbar.timeout" />
	</div>
</template>

<script>
import snackBar from '~/components/templates/snackbar'
import reviewEdit from '~/components/templates/reviewEdit'
export default {
	name: 'singleReviewPage',
	layout: 'admin',
	components: { snackBar, reviewEdit },
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
	data() {
		return {
			POST_TYPE: 'review',
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
			const currentPost = this.$store.getters[this.POST_TYPE + '/getCurrentPost']
			const errors = []
			if (!currentPost.name.length) errors.push('Empty name')
			else if (!currentPost.email.length) errors.push('Empty email')
			else if (currentPost.content.length < 50) errors.push('Content less than 50 characters')
			else if (currentPost.content.length > 1000) errors.push('Content more than 1000 characters')
			if (errors.length) {
				alert(errors[0])
			} else {
				const user = this.$store.getters['user/getUser']
				const data = {
					session: user.session,
					id: user.id,
					data: currentPost
				}
				await this.$store.dispatch(this.POST_TYPE + '/updateCurrentPost', data)
				this.snackbar.status = true
				setTimeout(() => {
					this.snackbar.status = false
				}, this.snackbar.timeout)
			}
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
			if (confirmDelete) this.$router.push('/admin/reviews')
		}
	}
}
</script>

<style scoped></style>
