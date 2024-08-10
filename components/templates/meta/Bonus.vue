<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Image :value="data.banner" title="Banner" :action="action" action_key="banner" />
				<MM_Input :value="data.bonus" :action="action" title="Bonus" action_key="bonus" />
				<MM_Input :value="data.min_deposit" :action="action" title="Min deposit" action_key="min_deposit" />
				<MM_Input :value="data.wagering" :action="action" title="Wagering" action_key="wagering" />
				<MM_Rating :value="data.rating" :action="action" title="Rating" action_key="rating" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import global from '~/mixins/global'
export default {
	name: 'bonusMeta',
	props: ['data', 'action'],
	mixins: [global]
}
</script>
