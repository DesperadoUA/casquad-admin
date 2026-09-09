<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.icon" title="Icon" :action="action" action_key="icon" />
				<MM_Image :value="data.preview_img" title="Preview" :action="action" action_key="preview_img" />
				<MM_Input :value="data.author" :action="action" title="author" action_key="author" />
				<MM_Textarea :value="data.author_summary" :action="action" title="Author summary" action_key="author_summary" />
				<MM_Checkbox :value="data.popular" :action="action" title="Popular" action_key="popular" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'slotMeta',
	props: ['data', 'action'],
	mixins: [global]
}
</script>
