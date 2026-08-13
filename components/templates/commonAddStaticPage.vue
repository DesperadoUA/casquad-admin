<template>
	<div>
		<v-container>
			<v-row>
				<v-col class="offset-1 col-10 mt-10">
					<h1 class="page_title font-podkova-bold">Add Static Page</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="mt-0">
					<MM_Input v-if="data" :value="data.title" title="Title" :action="action" action_key="title" />
					<MM_Input
						v-if="data"
						:value="data.permalink"
						title="Permalink"
						:action="action"
						action_key="permalink"
					/>
					<MM_Options
						v-if="data"
						:value="data.status"
						:all_value="['public', 'hide', 'basket']"
						title="Status"
						:action="action"
						action_key="status"
					/>
					<MM_Options
						v-if="data"
						:value="data.lang"
						:all_value="['ru', 'ua']"
						title="Lang"
						:action="action"
						action_key="lang"
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
					<!-- SEO: выбор индексации страницы (index,follow | noindex,follow) -->
					<MM_Options
						v-if="data"
						:value="data.robots || 'index,follow'"
						:all_value="['index,follow', 'noindex,follow']"
						title="Robots"
						:action="action"
						action_key="robots"
					/>
					<!-- SEO: попадание URL в sitemap (default on) -->
					<MM_Checkbox
						v-if="data"
						:value="data.in_sitemap == null ? 1 : data.in_sitemap"
						title="Include in Sitemap"
						:action="action"
						action_key="in_sitemap"
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
					<MM_Rich_Text
						v-if="data"
						:value="data.content_11"
						title="Content 11"
						:action="action"
						action_key="content_11"
					/>
					<MM_Rich_Text
						v-if="data"
						:value="data.content_12"
						title="Content 12"
						:action="action"
						action_key="content_12"
					/>
					<MM_Rich_Text
						v-if="data"
						:value="data.content_13"
						title="Content 13"
						:action="action"
						action_key="content_13"
					/>
					<MM_Rich_Text
						v-if="data"
						:value="data.content_14"
						title="Content 14"
						:action="action"
						action_key="content_14"
					/>
					<MM_Rich_Text
						v-if="data"
						:value="data.content_15"
						title="Content 15"
						:action="action"
						action_key="content_15"
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
					<MM_Input
						v-if="data"
						:value="data.screenshots_title"
						title="Screenshots title"
						:action="action"
						action_key="screenshots_title"
					/>
					<MM_Multiple_Two_Input_Image
						v-if="data"
						:value="data.screenshots"
						:action="action"
						title="Screenshots"
						action_key="screenshots"
					/>
					<MM_Input
						v-if="data"
						:value="data.pros_cons_title"
						title="Pros/Cons block title"
						:action="action"
						action_key="pros_cons_title"
					/>
					<MM_Input
						v-if="data"
						:value="data.pros_title"
						title="Pros title"
						:action="action"
						action_key="pros_title"
					/>
					<MM_Multiple_Input v-if="data" :value="data.pros" :action="action" title="Pros" action_key="pros" />
					<MM_Input
						v-if="data"
						:value="data.cons_title"
						title="Cons title"
						:action="action"
						action_key="cons_title"
					/>
					<MM_Multiple_Input v-if="data" :value="data.cons" :action="action" title="Cons" action_key="cons" />
					<!-- TOC: 1 ключ = 1 компонент; sources из TOC_SOURCES.page -->
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
					<MM_Media_Library />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import global from '~/mixins/global'
import { TOC_SOURCES } from '~/constants/tocSources'
export default {
	name: 'commonAddStaticPage',
	props: ['data', 'action'],
	mixins: [global],
	computed: {
		tocSourceOptions() {
			return TOC_SOURCES.page
		}
	}
}
</script>
