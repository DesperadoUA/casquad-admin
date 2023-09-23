<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Multiple_Input_Text 
                    :value = 'data.faq'
                    :action = 'action' 
                    :title = '"Faq"' 
                    :action_key = '"faq"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '~/components/lib/MM_Multiple_Input_Text'
    import MM_Input from '~/components/lib/MM_Input'
    import MM_Rating from '~/components/lib/MM_Rating'
    import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input'
    import MM_Review from '~/components/lib/MM_Review'
    export default {
        name: "pokerMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Rating, MM_Multiple_Input, MM_Review},
        data() {
            return {}
        }
    }
</script>