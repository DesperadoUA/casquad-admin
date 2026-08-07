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
	name: 'MM_Multi_Select',
	props: ['value', 'title', 'action', 'action_key', 'all_value'],
	data() {
		return {
			items: [],
			current_value: []
		}
	},
	mounted() {
		this.items = Array.isArray(this.all_value) && this.all_value.length ? this.all_value : ['content']
		const current = Array.isArray(this.value) ? this.value : []
		const filtered = current.filter((key) => this.items.indexOf(key) !== -1)
		this.current_value = filtered.length ? filtered : [this.items[0]]
	},
	methods: {
		changeItem() {
			let next = Array.isArray(this.current_value)
				? this.current_value.filter((key) => this.items.indexOf(key) !== -1)
				: []
			if (!next.length) {
				next = [this.items[0] || 'content']
				this.current_value = next
			}
			this.$store.dispatch(this.action, {
				key: this.action_key,
				value: next
			})
		}
	}
}
</script>
