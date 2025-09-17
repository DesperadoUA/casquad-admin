<template>
	<v-dialog :value="true" persistent fullscreen width="80%">
		<div class="btn_container d-flex align-center justify-center">
			<div class="btn_wrapper pa-2 d-flex gap-4">
				<v-btn color="red lighten-2" dark class="deep-orange darken-2" @click="confirmDelete">
					{{ confirmDeleteText }}
				</v-btn>
				<v-btn color="red lighten-2" dark class="deep-orange darken-2" @click="cancel">
					{{ cancelText }}
				</v-btn>
			</div>
		</div>
	</v-dialog>
</template>
<script>
export default {
	name: 'confirmDelete',
	props: {
		confirmDeleteText: {
			type: String,
			default: 'Confirm delete'
		},
		cancelText: {
			type: String,
			default: 'Cancel'
		}
	},
	methods: {
		confirmDelete() {
			this.$emit('delete')
		},
		cancel() {
			this.$emit('cancel')
		}
	}
}
</script>
<style scoped>
.btn_container {
	display: flex;
	justify-content: center;
	background: transparent;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
}
.btn_wrapper {
	background: #333333;
	display: flex;
	gap: 10px;
	justify-content: center;
	width: fit-content;
}
</style>
