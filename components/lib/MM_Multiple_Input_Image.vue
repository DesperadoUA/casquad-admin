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
                    <div class="col-lg-3 col-xs-12">
                      <img :src="currenData[index].src"
                          class="mm_image margin_bottom_15"
                      >
                    </div>
                    <div class="col-lg-3 col-xs-12">
                      <input type="file"
                            :id="'file_'+action_key+'_'+index"
                            class="mm_input margin_bottom_15 inputFile"
                            :ref="action_key"
                            @change="selectFile(index)"
                      > <label :for="'file_'+action_key+'_'+index" class="mt-7">Choose a file ...</label>
                    </div>
                    <div class="col-lg-6 col-xs-12">
                        <v-row v-for="(itemChild, indexChild) in currenData[index].value" :key = "indexChild">
                          <div class="col-10 col-xs-12">
                              <v-text-field 
                                    prepend-icon = "mdi-tooltip-edit"
                                    type = "text"
                                    v-model = "currenData[index]['value'][indexChild]"
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
                    </div>
                    <div class="col-12 text-left">
                      <v-btn
                        class="deep-orange darken-2 font-podkova-bold"
                        @click="deleteItem(item)"
                        ><v-icon left>mdi-delete</v-icon>Delete
                      </v-btn>
                    </div>
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
      import selectFile from '~/components/mixins/selectFile'
      export default {
          name: "MM_Multiple_Input_Image",
          props: ['value', 'title', 'action', 'action_key'],
          mixins: [selectFile],
          data(){
              return {
                  currenData: []
              }
          },
          methods: {
              addItem(){
                this.currenData.push({
                  src: '',
                  value: []
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
              deleteItemChild(indexParent, indexChild) {
                this.currenData[indexParent].value.splice(indexChild, 1)
                const currenData = {
                        key: this.action_key,
                        value: this.currenData
                      }
                this.$store.dispatch(this.action, currenData) 
              },
              addItemChild(index){
                this.currenData[index].value.push('')
              }
          },
          mounted(){
            this.currenData = this.value
          }
      }
  </script>
  
  <style scoped>
  .bb_orange {
    border-bottom: 1px solid #FF3D00;
  }
  </style>