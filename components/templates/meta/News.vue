<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.icon" title="Icon" :action="action" action_key="icon" />
				<MM_Input :value="data.author" :action="action" title="author" action_key="author" />
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
