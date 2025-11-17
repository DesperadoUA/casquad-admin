<template>
	<div>
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-10">
					<h1 class="page_title" v-if="data">{{ current_title }}</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="mt-0">
					<MM_Input v-if="data" :value="data.title" :title="'Title'" :action="action" :action_key="'title'" />
					<MM_Options
						v-if="data"
						:value="data.status"
						:all_value="['public', 'hide', 'basket']"
						title="Status"
						:action="action"
						action_key="status"
					/>
					<MM_Input v-if="data" :value="data.meta_title" title="Meta Title" :action="action" action_key="meta_title" />
					<MM_Input
						v-if="data"
						:value="data.description"
						title="Description"
						:action="action"
						action_key="description"
					/>
					<MM_Input v-if="data" :value="data.keywords" title="Keywords" :action="action" action_key="keywords" />
					<MM_Textarea
						v-if="data"
						:value="data.short_desc"
						title="Short desc"
						:action="action"
						action_key="short_desc"
					/>
					<MM_Input v-if="data" :value="data.h1" title="H1" :action="action" action_key="h1" />
					<MM_Rich_Text v-if="data" :value="data.content" title="Content" :action="action" action_key="content" />
					<MM_Rich_Text v-if="data" :value="data.content_1" title="Content 1" :action="action" action_key="content_1" />
					<MM_Rich_Text v-if="data" :value="data.content_2" title="Content 2" :action="action" action_key="content_2" />
					<MM_Rich_Text v-if="data" :value="data.content_3" title="Content 3" :action="action" action_key="content_3" />
					<MM_Rich_Text v-if="data" :value="data.content_4" title="Content 4" :action="action" action_key="content_4" />
					<MM_Rich_Text v-if="data" :value="data.content_5" title="Content 5" :action="action" action_key="content_5" />
					<MM_Rich_Text v-if="data" :value="data.content_6" title="Content 6" :action="action" action_key="content_6" />
					<MM_Rich_Text v-if="data" :value="data.content_7" title="Content 7" :action="action" action_key="content_7" />
					<MM_Rich_Text v-if="data" :value="data.content_8" title="Content 8" :action="action" action_key="content_8" />
					<MM_Rich_Text v-if="data" :value="data.content_9" title="Content 9" :action="action" action_key="content_9" />
					<MM_Rich_Text
						v-if="data"
						:value="data.content_10"
						title="Content 10"
						:action="action"
						action_key="content_10"
					/>
					<MM_Date
						v-if="data"
						:value="data.create_at.slice(0, 10)"
						title="Create At"
						:action="action"
						action_key="create_at"
					/>
					<MM_Date
						v-if="data"
						:value="data.update_at.slice(0, 10)"
						title="Update At"
						:action="action"
						action_key="update_at"
					/>
					<MM_Image v-if="data" :value="data.thumbnail" title="Thumbnail" :action="action" action_key="thumbnail" />
					<MM_Image v-if="data" :value="data.social_img" title="Social Img" :action="action" action_key="social_img" />
					<MM_Input v-if="data" :value="data.faq_title" title="Faq title" :action="action" action_key="faq_title" />
					<MM_Multiple_Input_Text :value="data.faq" :action="action" title="Faq" action_key="faq" />
					<MM_Textarea
						:value="data.author_summary"
						:action="action"
						title="Author summary"
						action_key="author_summary"
					/>
					<MM_Relative_Posts
						:value="data.page_author"
						:action="action"
						title="Page author relative"
						action_key="page_author"
					/>
					<MM_Media_Library />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import global from '~/mixins/global'
export default {
	name: 'commonEditStaticPage',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {
			current_title: ''
		}
	},
	mounted() {
		this.current_title = this.data.title
	}
}
</script>
