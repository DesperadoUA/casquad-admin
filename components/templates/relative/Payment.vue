<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
            <MM_Relative_Posts 
                    :value = 'data.category'
                    :action = 'action' 
                    :title = '"Relative category"' 
                    :action_key = '"category"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.payment_currency'
                    :action = 'action' 
                    :title = '"Relative currency"' 
                    :action_key = '"payment_currency"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.payment_type_payment'
                    :action = 'action' 
                    :title = '"Relative type payment"' 
                    :action_key = '"payment_type_payment"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Relative_Posts from '~/components/lib/MM_Relative_Posts'
    export default {
        name: "paymentsCategory",
        props: ['data', 'action'],
        components: {MM_Relative_Posts},
        data() {
            return {}
        }
    }
</script>