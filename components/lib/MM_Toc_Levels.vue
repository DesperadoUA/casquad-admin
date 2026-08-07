<template>
	<v-container class="container--fluid pa-0">
		<v-row>
			<v-col class="offset-1 col-10 blue-grey darken-4">
				<v-expansion-panels inset>
					<v-expansion-panel>
						<v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
						<v-expansion-panel-content class="pt-4">
							<v-row align="center">
								<v-col class="d-flex" cols="12" sm="6">
									<v-select
										color="deep-orange darken-2"
										:items="items"
										item-text="text"
										item-value="value"
										v-model="current_value"
										multiple
										chips
										deletable-chips
										@change="changeItem"
									></v-select>
								</v-col>
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
	name: 'MM_Toc_Levels',
	props: ['value', 'title', 'action', 'action_key'],
	data() {
		return {
			current_value: [2],
			items: [
				{ text: 'H2', value: 2 },
				{ text: 'H3', value: 3 },
				{ text: 'H4', value: 4 },
				{ text: 'H5', value: 5 },
				{ text: 'H6', value: 6 }
			]
		}
	},
	mounted() {
		this.current_value = this.normalizeLevels(this.value)
	},
	methods: {
		normalizeLevels(levels) {
			const allowed = [2, 3, 4, 5, 6]
			const next = (Array.isArray(levels) ? levels : [])
				.map(Number)
				.filter((level) => allowed.indexOf(level) !== -1)
			const unique = []
			next.forEach((level) => {
				if (unique.indexOf(level) === -1) unique.push(level)
			})
			unique.sort((a, b) => a - b)
			return unique.length ? unique : [2]
		},
		changeItem() {
			const next = this.normalizeLevels(this.current_value)
			this.current_value = next
			this.$store.dispatch(this.action, {
				key: this.action_key,
				value: next
			})
		}
	}
}
</script>
