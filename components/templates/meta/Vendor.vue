<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.icon" title="Icon" :action="action" action_key="icon" />
				<MM_Image :value="data.banner" title="Banner" :action="action" action_key="banner" />
				<MM_Rating :value="data.rating" :action="action" title="Rating" action_key="rating" />
				<MM_Input :value="data.video_title" :action="action" title="Video title" action_key="video_title" />
				<MM_Multiple_Input_Image :value="data.video" :action="action" title="Video" action_key="video" />
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
