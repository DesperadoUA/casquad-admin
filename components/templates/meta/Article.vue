<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Textarea :value="data.author_summary" :action="action" title="Author summary" action_key="author_summary" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'articleMeta',
	props: ['data', 'action'],
	mixins: [global]
}
</script>
