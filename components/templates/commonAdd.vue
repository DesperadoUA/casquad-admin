<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">Add Post</h1>
        </v-col>
      </v-row>
      <v-row>
           <v-col class="mt-0">
                    <MM_Input   v-if = 'data' 
                                :value = 'data.title' 
                                :title = '"Title"'
                                :action = 'action'
                                :action_key = '"title"'
                                 />     
                    <MM_Options v-if = 'data' 
                                :value = 'data.status' 
                                :all_value = '["public", "hide", "basket"]'
                                :title = '"Status"'
                                :action = 'action'
                                :action_key = '"status"'
                                 />
                    <MM_Options v-if = 'data' 
                                :value = 'data.lang' 
                                :all_value = '["ru", "ua"]'
                                :title = '"Lang"'
                                :action = 'action'
                                :action_key = '"lang"'
                                 />
                    <MM_Input   v-if = 'data' 
                                :value = 'data.meta_title' 
                                :title = '"Meta Title"' 
                                :action = 'action'
                                :action_key = '"meta_title"'
                                />
                    <MM_Input v-if = 'data' 
                                :value = 'data.description' 
                                :title = '"Description"'
                                :action = 'action'
                                :action_key = '"description"'
                                 />
                    <MM_Input   v-if = 'data' 
                                :value = 'data.keywords' 
                                :title = '"Keywords"' 
                                :action = 'action'
                                :action_key = '"keywords"'
                                />
                    <MM_Textarea v-if = 'data' 
                                :value = 'data.short_desc' 
                                :title = '"Short desc"'
                                :action = 'action'
                                :action_key = '"short_desc"' />
                    <MM_Input   v-if = 'data' 
                                :value = 'data.h1' 
                                :title = '"H1"'
                                :action = 'action'
                                :action_key = '"h1"' />
                    <MM_Multiple_Input_Text_Options v-if = 'data'
                                :value = 'data.content' 
                                :title = '"Content"'
                                :action = 'action'
                                :action_key = '"content"'
                                :items = 'typeContent' />
                    <MM_Date    v-if = 'data' 
                                :value = 'data.create_at' 
                                :title = '"Create At"'
                                :action = 'action'
                                :action_key = '"create_at"' />
                    <MM_Date    v-if = 'data' 
                                :value = 'data.update_at' 
                                :title = '"Update At"'
                                :action = 'action'
                                :action_key = '"update_at"' />
                    <MM_Image   v-if = 'data' 
                                :value = 'data.thumbnail' 
                                :title = '"Thumbnail"'
                                :action = 'action'
                                :action_key = '"thumbnail"' />
                    <MM_Media_Library />
           </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MM_Input from '~/components/lib/MM_Input'
import MM_Textarea from '~/components/lib/MM_Textarea'
import MM_Rich_Text from '~/components/lib/MM_Rich_Text'
import MM_Date from '~/components/lib/MM_Date'
import MM_Options from '~/components/lib/MM_Options'
import MM_Image from '~/components/lib/MM_Image'
import MM_Media_Library from '~/components/lib/MM_Media_Library'
import MM_Multiple_Input_Text_Options from '~/components/lib/MM_Multiple_Input_Text_Options'
import config from '~/config'
    export default {
        name: "commonAdd",
        props: ['data', 'action'],
        components:{MM_Input, MM_Textarea, MM_Rich_Text, MM_Date, MM_Options, MM_Image, MM_Media_Library, MM_Multiple_Input_Text_Options},
        data(){
          return {
            current_title: '',
            typeContent: config.TYPE_CONTENT,
          }
        },
        mounted(){
          this.current_title = this.data.title
        }
    }
</script>