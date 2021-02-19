<template>
  <div>
    <v-app-bar color="primary lighten-1" dark flat>
      <v-container>
        <v-row align="center">
          <router-link :to="{ name: 'home'}" class="text-decoration-none">
            <v-toolbar-title class="white--text">  
              <v-icon class="px-2">mdi-bicycle</v-icon>
            VueRental
            </v-toolbar-title>
          </router-link>

          <v-spacer></v-spacer>

          <CartList></CartList>
          <SearchEngine></SearchEngine>
        </v-row>
      </v-container>
    </v-app-bar>
    </div>
</template>

<script>
const CartList = () => import('./navbar/CartList')
const SearchEngine = () => import('./navbar/SeachEngine')
export default {
    components: { CartList, SearchEngine },
}
</script>