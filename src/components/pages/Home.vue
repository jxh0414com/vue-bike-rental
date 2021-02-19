<template>
    <v-container fluid>
        <GifImage></GifImage>

        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="8">
                    <BikeList></BikeList>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                    <InfoList></InfoList>
                </v-col>   
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
const GifImage = () => import('./home/GifImage')
const BikeList = () => import('./home/BikeList')
const InfoList = () => import('./home/InfoList')
export default {
    components: { GifImage, BikeList, InfoList }
}
</script>

<style>

</style>