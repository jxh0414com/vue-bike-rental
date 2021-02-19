<template>
    <v-card flat>
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6" lg="4" v-for="bike in products" :key="bike.id">
                <v-card height="415">
                    <v-img height="250" :src="bike.image"></v-img>
                    <v-card-title class="text-break">
                        <span>{{ bike.name }}</span>
                    </v-card-title>

                    <v-subheader><v-icon>mdi-currency-usd</v-icon>{{ bike.price }}</v-subheader>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="success lighten-1"
                            @click="addToCart(bike)"
                        >
                            Reserve
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-card> 
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Adult Male Bike",
                    price: 20.50,
                    image: "https://via.placeholder.com/375x250/?text=Adult+Male+Bike",
                    type: "bike"
                },
                {
                    id: 2,
                    name: "Adult Female Bike",
                    price: 20.50,
                    image: "https://via.placeholder.com/375x250?text=Adult+Female+Bike",
                    type: "bike"
                },
                {
                    id: 3,
                    name: "Kids Unisex Bike",
                    price: 12.75,
                    image: "https://via.placeholder.com/375x250?text=Kids+Unisex+Bike",
                    type: "bike"
                },
                {
                    id: 4,
                    name: "Adult Unisex Helmet",
                    price: 4.00,
                    image: "https://via.placeholder.com/375x250?text=Adult+Unisex+Helmet",
                    type: "accessory"
                },
                {
                    id: 5,
                    name: "Kids Unisex Helmet",
                    price: 3.50,
                    image: "https://via.placeholder.com/375x250?text=Kids+Unisex+Helmet",
                    type: "accessory"
                },
                {
                    id: 6,
                    name: "Insurance",
                    price: 9.99,
                    image: "https://via.placeholder.com/375x250?text=Insurance",
                    type: "addon"
                }
            ]
        }
    },
    methods: {
        ...mapActions(['addToCart']),
    }
}
</script>

<style>

</style>