<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Multiple_Input_Options
					:value="data.ref"
					:action="action"
					title="Referral link"
					action_key="ref"
					:items="geo"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import config from '~/config'
import global from '~/mixins/global'
export default {
	name: 'funnelMeta',
	props: ['data', 'action'],
	mixins: [global],
	data() {
		return {
			labels: config.LABELS,
			geo: config.GEO
		}
	}
}
</script>
