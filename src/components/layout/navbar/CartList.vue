<template>
    <v-menu offset-y :close-on-content-click="false" left>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
            <v-icon >mdi-cart</v-icon>
            </v-btn>
        </template>

        <v-card class="mx-auto" max-width="400" tile v-if="Object.keys(cart).length > 0">
            <v-card-text class="pa-0">
                <v-list-item v-for="item in cart" :key="item.id" three-line>
                    <v-list-item-content>
                        <v-col cols="12" sm="12" md="6">       
                            <v-img :src="item.image" :alt="item.name"></v-img>
                        </v-col>

                        <v-col cols="12" sm="12" md="6" class="d-flex flex-column justify-content-center">       
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle class="py-4 align-self-center">{{ item.price }}</v-list-item-subtitle>
                            <v-subheader class="quantity">
                                <v-icon @click.prevent="decreaseByOne(item.id)"> mdi-minus</v-icon>
                                {{ item.count }}
                                <v-icon @click.prevent="increaseByOne(item.id)">mdi-plus</v-icon>
                            </v-subheader>
                        </v-col>
                    </v-list-item-content>
                </v-list-item>
            </v-card-text>
            
            <v-card-actions class="pa-4">    
                <router-link :to="{ name: 'checkout'}" class="w-100 text-decoration-none"  v-if="cart.some(e => e.type === 'bike')">
                    <v-btn color="success lighten-1" width="100%">
                        Checkout
                    </v-btn>
                </router-link>
                <v-alert  prominent icon="mdi-alert" border="left" type="warning" v-else>
                    Cannot proceed to checkout without a bike
                </v-alert>
            </v-card-actions>
        </v-card>

         <NoItem v-else></NoItem>
    </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const NoItem = () => import('./NoItem')
export default {
    components: { NoItem },
    computed: {
      ...mapGetters({ cart: 'getCart' })
    },
    methods: {
        ...mapActions(['increaseByOne', 'decreaseByOne'])
    }
}
</script>

<style scoped>
    .quantity {
        display: flex !important;
        justify-content: space-between;
        padding: 10px 20px;
    }
    .w-100 {
        width: 100%;
    }
</style>