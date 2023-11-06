<template>
	<v-container>
		<v-row>
			<v-col class="mt-0">
				<MM_Input :value="data.iframe" :action="action" title="iframe" action_key="iframe" />
				<MM_Input :value="data.rtp" :action="action" title="RTP" action_key="rtp" />
				<MM_Input :value="data.min_bid" :action="action" title="Min bid" action_key="min_bid" />
				<MM_Input :value="data.scheme" :action="action" title="Scheme" action_key="scheme" />
				<MM_Input :value="data.lines" :action="action" title="Lines" action_key="lines" />
				<MM_Checkbox :value="data.game_week" :action="action" title="Game Week" action_key="game_week" />
				<MM_Multiple_Two_Input_Image :value="data.symbols" :action="action" title="Symbols" action_key="symbols" />
				<MM_Multiple_Two_Input_Image
					:value="data.screenshots"
					:action="action"
					title="Screenshots"
					action_key="screenshots"
				/>
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
