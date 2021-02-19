<template>
    <v-container class="py-16">
        <v-row justify="space-between">
            <v-col cols="12" sm="12" md="6">
                <CheckoutForm></CheckoutForm>
            </v-col> 

            <v-col cols="12" sm="12" md="4">
                <CartView></CartView>
            </v-col> 
        </v-row>
    </v-container>
</template>

<script>
const CartView = () => import('./checkout/CartView')
const CheckoutForm = () => import('./checkout/CheckoutForm')
export default {
    components: { CartView, CheckoutForm }
}
</script>