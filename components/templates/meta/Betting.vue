<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Multiple_Input
                    :value = 'data.ref'
                    :action = 'action' 
                    :title = '"Referal link"' 
                    :action_key = '"ref"'
                    />
                <MM_Rating 
                    :value = 'data.rating'
                    :action = 'action' 
                    :title = '"Rating"' 
                    :action_key = '"rating"'
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Input from '~/components/lib/MM_Input'
    import MM_Checkbox from '~/components/lib/MM_Checkbox'
    import MM_Rating from '~/components/lib/MM_Rating'
    import MM_Multiple_Input_Text from '~/components/lib/MM_Multiple_Input_Text'
    import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input'
    export default {
        name: "bettingMeta",
        props: ['data', 'action'],
        components: {MM_Input, MM_Checkbox, MM_Multiple_Input, MM_Multiple_Input_Text, MM_Rating},
        data() {
            return {}
        }
    }
</script>