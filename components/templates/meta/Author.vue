<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Input :value="data.social" :action="action" title="social" action_key="social" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'authorMeta',
	props: ['data', 'action'],
	mixins: [global]
}
</script>
