  
<template>
    <v-container class="container--fluid pa-0">
      <v-row>
        <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
          <v-expansion-panels inset>
            <v-expansion-panel>
              <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-4">
                <v-container class="bb_orange" v-for="(item, index) in currenData" :key = "index">
                  <v-row class="pa-2 mb-2 slider_item_wrapper">
                    <div class="col-lg-12 col-xs-12">
                      <v-text-field 
                            prepend-icon = "mdi-tooltip-edit"
                            type = "text"
                            color = "deep-orange darken-2"
                            v-model = "currenData[index].value"
                            @change = "change" 
                      ></v-text-field>
                      <v-btn
                          class="deep-orange darken-2 font-podkova-bold mt-5"
                          @click="deleteItem(item)"
                      >
                      <v-icon left>mdi-delete</v-icon>
                      Delete
                      </v-btn>
                    </div>
                    <v-container>
                        <v-row v-for="(itemChild, indexChild) in currenData[index].child" :key = "indexChild">
                          <div class="col-1"></div>
                          <div class="col-9 col-xs-12">
                              <v-text-field 
                                    prepend-icon = "mdi-tooltip-edit"
                                    type = "text"
                                    v-model = "currenData[index]['child'][indexChild].value"
                                    @change = "change" 
                                    color = "deep-orange darken-2"
                              ></v-text-field>
                            </div>
                          <div class="col-2 text-right">
                            <v-btn
                              class="deep-orange darken-2 font-podkova-bold mt-5"
                              @click="deleteItemChild(index, indexChild)"
                            >
                            <v-icon left>mdi-delete</v-icon>
                                Delete
                                </v-btn>
                          </div>
                        </v-row>
                          <div class="col-12 text-right">
                            <v-btn
                            class="deep-orange darken-2 font-podkova-bold mt-5"
                            @click="addItemChild(index)"
                            >
                              <v-icon left>mdi-playlist-plus</v-icon>
                              Add
                            </v-btn>
                            </div>
                    </v-container>
                  </v-row>
                </v-container>
                <v-btn
                        class="deep-orange darken-2 font-podkova-bold mt-5"
                        @click="addItem"
                >
                  <v-icon left>mdi-playlist-plus</v-icon>
                  Add
                </v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
      export default {
          name: "MM_Multiple_Input_Deep",
          props: ['value', 'title', 'action', 'action_key'],
          data () {
              return {
                  currenData: []
              }
          },
          mounted() {
              this.currenData = this.value
          },
          methods: {
              deleteItemChild(indexParent, indexChild) {
                this.currenData[indexParent].child.splice(indexChild, 1)
                const currenData = {
                        key: this.action_key,
                        value: this.currenData
                      }
                this.$store.dispatch(this.action, currenData) 
              },
              addItem(){
                this.currenData.push({
                  value: '',
                  child: []
                })
                const currenData = {
                        key: this.action_key,
                        value: this.currenData
                      }
                this.$store.dispatch(this.action, currenData)
              },
              addItemChild(index){
               this.currenData[index].child.push({
                    value: ''
                })
              const currenData = {
                        key: this.action_key,
                        value: this.currenData
                      }
                this.$store.dispatch(this.action, currenData)
              },
              change(){
                const currenData = {
                        key: this.action_key,
                        value: this.currenData
                      }
                this.$store.dispatch(this.action, currenData)
              },
              deleteItem(item){
                this.currenData = this.currenData.filter(obj => obj !== item)
                const currenData = {
                        key: this.action_key,
                        value: this.currenData
                      }
                this.$store.dispatch(this.action, currenData) 
              },
          },
      }
  </script>
  
  <style scoped>
  .slider_item_wrapper {
    border-bottom: 1px solid #e64a19;
  }
  </style>