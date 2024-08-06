<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Input :value="data.author" :action="action" :title="'author'" :action_key="'author'" />
				<MM_Rating :value="data.rating" :action="action" title="Rating" action_key="rating" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'languageMeta',
	props: ['data', 'action'],
	mixins: [global]
}
</script>
