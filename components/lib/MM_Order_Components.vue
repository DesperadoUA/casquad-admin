<template>
	<v-container class="container--fluid pa-0">
		<v-row>
			<v-col class="offset-1 col-10 blue-grey darken-4">
				<v-expansion-panels inset>
					<v-expansion-panel>
						<v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
						<v-expansion-panel-content class="pt-4">
							<v-container class="bb_orange">
								<v-row class="pa-2 slider_item_wrapper">
									<v-col class="col-2" v-for="([key], index) in Object.entries(currenData)" :key="index">
										<v-text-field
											v-model="currenData[key]"
											:label="key"
											type="number"
											variant="outlined"
											step="1"
											@change="change"
										/>
									</v-col>
								</v-row>
							</v-container>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'MM_Order_Components',
	props: ['value', 'title', 'action', 'action_key'],
	data() {
		return {
			currenData: {}
		}
	},
	mounted() {
		this.currenData = this.value
	},
	methods: {
		change() {
			const currenData = {
				key: this.action_key,
				value: this.currenData
			}
			this.$store.dispatch(this.action, currenData)
		}
	}
}
</script>
