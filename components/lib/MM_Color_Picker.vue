<template>
	<v-container class="container--fluid pa-0">
		<v-row>
			<v-col class="offset-1 col-10 blue-grey darken-4">
				<v-expansion-panels inset>
					<v-expansion-panel>
						<v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
						<v-expansion-panel-content class="pt-4">
							<v-row>
								<v-color-picker v-model="currentData" show-swatches flat></v-color-picker>
							</v-row>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'MM_Color_Picker',
	props: ['value', 'title', 'action', 'action_key'],
	data() {
		return {
			color: '#006064'
		}
	},
	mounted() {
		this.color = this.value
	},
	computed: {
		currentData: {
			get() {
				const data = {
					value: this.color,
					key: this.action_key
				}
				this.$store.dispatch(this.action, data)
				return this.color
			},
			set(v) {
				this.color = v
			}
		}
	}
}
</script>

<style scoped></style>
