<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.icon" title="Icon" :action="action" action_key="icon" />
				<MM_Image :value="data.banner" title="Banner" :action="action" action_key="banner" />
				<MM_Rating :value="data.rating" :action="action" title="Rating" action_key="rating" />
				<MM_Input :value="data.video_title" :action="action" title="Video title" action_key="video_title" />
				<MM_Multiple_Input_Image :value="data.video" :action="action" title="Video" action_key="video" />
				<MM_Input :value="data.screenshots_title" :action="action" title="Screenshots title" action_key="screenshots_title" />
				<MM_Multiple_Two_Input_Image
					:value="data.screenshots"
					:action="action"
					title="Screenshots"
					action_key="screenshots"
				/>
				<MM_Input :value="data.faq_title" :action="action" title="Faq title" action_key="faq_title" />
				<MM_Multiple_Input_Text :value="data.faq" :action="action" title="Faq" action_key="faq" />
				<MM_Textarea :value="data.author_summary" :action="action" title="Author summary" action_key="author_summary" />
				<MM_Input :value="data.pros_cons_title" :action="action" title="Pros cons title" action_key="pros_cons_title" />
				<MM_Input :value="data.pros_title" :action="action" title="Pros title" action_key="pros_title" />
				<MM_Input :value="data.cons_title" :action="action" title="Cons title" action_key="cons_title" />
				<MM_Multiple_Input :value="data.pros" :action="action" title="Pros" action_key="pros" />
				<MM_Multiple_Input :value="data.cons" :action="action" title="Cons" action_key="cons" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import config from '~/config'
import global from '~/mixins/global'
export default {
	name: 'vendorMeta',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {
			licenses: config.VENDOR_LICENSES
		}
	}
}
</script>
