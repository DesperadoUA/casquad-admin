<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Rating 
                    :value = 'data.rating'
                    :action = 'action' 
                    :title = '"Rating"' 
                    :action_key = '"rating"'
                />
                <MM_Multiple_Options_Three_Input  
                    :value = 'data.licenses'
                    :action = 'action'
                    :items = 'licenses' 
                    title = "Licenses" 
                    action_key = "licenses"
                />
                <MM_Multiple_Two_Input  
                    :value = 'data.characteristics'
                    :action = 'action' 
                    title = "Characteristics" 
                    action_key = "characteristics"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Input from '~/components/lib/MM_Input'
    import MM_Rating from '~/components/lib/MM_Rating'
    import MM_Multiple_Options_Three_Input from '~/components/lib/MM_Multiple_Options_Three_Input'
    import MM_Multiple_Two_Input from '~/components/lib/MM_Multiple_Two_Input'
    import config from '~/config'
    export default {
        name: "vendorMeta",
        props: ['data', 'action'],
        components: {MM_Input, MM_Rating, MM_Multiple_Options_Three_Input, MM_Multiple_Two_Input},
        data() {
            return {
                licenses: config.VENDOR_LICENSES,
            }
        },
    }
</script>