<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Input
                    :value = 'data.autor'
                    :action = 'action' 
                    :title = '"autor"' 
                    :action_key = '"autor"'
                />
                <MM_Multiple_Input
                    :value = 'data.ref'
                    :action = 'action' 
                    title = "Referal link" 
                    action_key = "ref"
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '~/components/lib/MM_Multiple_Input_Text'
    import MM_Input from '~/components/lib/MM_Input'
    import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input'
    import MM_Checkbox from '~/components/lib/MM_Checkbox'
    import MM_Characters_Game from '~/components/lib/MM_Characters_Game'    
    import MM_Multiple_Two_Input_Image from '~/components/lib/MM_Multiple_Two_Input_Image' 
    import MM_Rating from '~/components/lib/MM_Rating' 
    export default {
        name: "slotMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Multiple_Input, MM_Checkbox, MM_Characters_Game, 
        MM_Multiple_Two_Input_Image, MM_Rating},
        data() {
            return {}
        }
    }
</script>