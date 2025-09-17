<template>
	<div>
		<commonEdit v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<postMeta v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<adminCategoryRelative v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-5 mb-10">
					<v-btn class="font-podkova-bold deep-orange darken-2" text @click="update()">
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
		<postPreview v-if="data.body" slug="vendors" :permalink="data.body.permalink" />
		<confirmDelete v-if="confirmDeleteIsShow" @delete="confirmDelete" @cancel="cancel" />
	</div>
</template>

<script>
import singleCategoryEdit from '~/mixins/singleCategoryEdit'

export default {
	name: 'singleVendorCategoryPage',
	mixins: [singleCategoryEdit],
	data() {
		return {
			POST_TYPE: 'vendor_category',
			PATH_CATEGORY: 'vendor/category'
		}
	}
}
</script>
