<template>
    <v-card class="mx-auto" v-if="Object.keys(cart).length > 0">
        <v-card-text class="pa-0">
            <v-list-item v-for="item in cart" :key="item.id" three-line>
                <v-list-item-content>
                    <v-col cols="12" sm="12" md="6" >       
                        <v-img :src="item.image" :alt="item.name"></v-img>
                    </v-col>

                    <v-col cols="12" sm="12" md="6"  class="d-flex flex-column justify-content-center">       
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
    </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
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