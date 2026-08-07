<template>
	<div>
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-10">
					<h1 class="page_title font-podkova-bold" v-if="data">{{ current_title }}</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="mt-0">
					<MM_Input v-if="data" :value="data.title" title="Title" :action="action" action_key="title" />
					<MM_Options
						v-if="data"
						:value="data.status"
						:all_value="['public', 'hide', 'basket']"
						title="Status"
						:action="action"
						action_key="status"
					/>
					<MM_Input v-if="data" :value="data.permalink" title="Permalink" :action="action" action_key="permalink" />
					<MM_Input v-if="data" :value="data.meta_title" title="Meta Title" :action="action" action_key="meta_title" />
					<MM_Input
						v-if="data"
						:value="data.description"
						title="Description"
						:action="action"
						action_key="description"
					/>
					<MM_Input v-if="data" :value="data.keywords" title="Keywords" :action="action" action_key="keywords" />
					<!-- SEO: выбор индексации (index,follow | noindex,follow) -->
					<MM_Options
						v-if="data"
						:value="data.robots || 'index,follow'"
						:all_value="['index,follow', 'noindex,follow']"
						title="Robots"
						:action="action"
						action_key="robots"
					/>
					<MM_Textarea
						v-if="data"
						:value="data.short_desc"
						title="Short desc"
						:action="action"
						action_key="short_desc"
					/>
					<MM_Input v-if="data" :value="data.h1" title="H1" :action="action" action_key="h1" />
					<MM_Rich_Text v-if="data" :value="data.content" title="Content" :action="action" action_key="content" />
					<!-- TOC: 1 ключ = 1 компонент; all_value для sources — проп с типа поста -->
					<MM_Checkbox
						v-if="data"
						:value="data.toc_enabled || 0"
						title="TOC Enabled"
						:action="action"
						action_key="toc_enabled"
					/>
					<MM_Toc_Levels
						v-if="data"
						:value="data.toc_levels || [2]"
						title="TOC Levels"
						:action="action"
						action_key="toc_levels"
					/>
					<MM_Multi_Select
						v-if="data"
						:value="data.toc_sources || ['content']"
						:all_value="tocSourceOptions"
						title="TOC Sources"
						:action="action"
						action_key="toc_sources"
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
					<MM_Media_Library />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import global from '~/mixins/global'
export default {
	name: 'commonEdit',
	props: {
		data: { type: Object, required: true },
		action: { type: String, required: true },
		tocSourceOptions: {
			type: Array,
			default() {
				return ['content']
			}
		}
	},
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
