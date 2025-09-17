<template>
	<div>
		<commonEdit v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<geoEdit v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<postMeta v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" />
		<relative v-if="data.body" :data="data.body" :action="POST_TYPE + '/changeStateCurrentPost'" postType="BONUS" />
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-5 mb-10">
					<v-btn class="deep-orange darken-2" text @click="update()">
						<v-icon left color="white">mdi-content-save</v-icon>
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
		<postPreview v-if="data.body" slug="bonus" :permalink="data.body.permalink" />
	</div>
</template>

<script>
import postMeta from '~/components/templates/meta/Bonus'
import geoEdit from '~/components/templates/geoEdit'
import singlePostEdit from '~/mixins/singlePostEdit'

export default {
	name: 'singleBonusPage',
	mixins: [singlePostEdit],
	components: { postMeta, geoEdit },
	data() {
		return {
			POST_TYPE: 'bonus'
		}
	}
}
</script>
