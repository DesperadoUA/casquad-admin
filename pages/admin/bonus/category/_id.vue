<template>
	<div>
		<commonEdit v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<postMeta v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<adminCategoryRelative v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-5 mb-10">
					<v-btn class="deep-orange darken-2" text @click="update()">
						Update
					</v-btn>
					<v-btn class="deep-orange darken-2 ml-5" text @click="postDelete()">
						<v-icon left color="white">mdi-delete</v-icon>
						Delete
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
		<snackBar :status="snackbar.status" :text="snackbar.text" :timeout="snackbar.timeout" />
		<postPreview v-if="data.body" slug="bonuses" :permalink="data.body.permalink" />
	</div>
</template>

<script>
import singleCategoryEdit from '~/mixins/singleCategoryEdit'

export default {
	name: 'singleBonusCategoryPage',
	mixins: [singleCategoryEdit],
	data() {
		return {
			POST_TYPE: 'bonus_category',
			PATH_CATEGORY: 'bonus/category'
		}
	}
}
</script>
