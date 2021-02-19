<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
      </template>
      <span>Search engine disabled!</span>
    </v-tooltip>
</template>

<script>
export default {

}
</script>

<style>

</style>