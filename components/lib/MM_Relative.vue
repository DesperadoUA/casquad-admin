<template>
      <v-col cols="10">
        <v-combobox
          v-model="chips"
          :items="items"
          label="Combobox"
          multiple
          outlined
          dense
          @change="change"
        ></v-combobox>
      </v-col>
</template>

<script>
    export default {
        name: "MM_Relative",
        props: ['value', 'index'],
        data () {
          return {
            chips: [],
            items: [],
          }
        },
        methods: {
          change() {
            const data = {
                index: this.index,
                value: this.chips
            }
            this.$emit('change', data);
          },
        },
        mounted(){
          this.chips = this.value.current_value
          this.items = this.value.all_value
        }
    }
</script>

<style scoped>

</style>