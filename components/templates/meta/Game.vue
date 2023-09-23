<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Input
                    :value = 'data.iframe'
                    :action = 'action' 
                    :title = '"iframe"' 
                    :action_key = '"iframe"'
                />
                <MM_Multiple_Two_Input
                    :value = 'data.special_ref'
                    :action = 'action' 
                    :title = '"Special ref"' 
                    :action_key = '"special_ref"'
                />
                <MM_Multiple_Two_Input  
                    :value = 'data.characteristics'
                    :action = 'action' 
                    title = "Characteristics" 
                    action_key = "characteristics"
                />
                <MM_Multiple_Input_Image  
                    :value = 'data.symbols'
                    :action = 'action' 
                    title = "Symbols" 
                    action_key = "symbols"
                />
                <MM_Multiple_Two_Input_Image 
                    :value = 'data.gallery'
                    :action = 'action' 
                    :title = '"Gallery"' 
                    :action_key = '"gallery"'
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
    import MM_Multiple_Two_Input from '~/components/lib/MM_Multiple_Two_Input'
    import MM_Multiple_Input_Image from '~/components/lib/MM_Multiple_Input_Image'
    export default {
        name: "slotMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Multiple_Input, MM_Checkbox, MM_Characters_Game, 
        MM_Multiple_Two_Input_Image, MM_Rating, MM_Multiple_Two_Input, MM_Multiple_Input_Image},
        data() {
            return {}
        }
    }
</script>