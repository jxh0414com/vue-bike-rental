<template>
    <v-card flat>
        <v-alert outlined color="info" prominent border="left">
            <h3 class="headline">Rental</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque. </li>
            </ul>
        </v-alert>  

        <v-alert outlined color="warning" prominent border="left">
            <h3 class="headline">Insurance</h3>
                    <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque. </li>
            </ul>
            <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

            <v-row align="center" no-gutters>
                <v-col class="grow">
                    Please consider!
                </v-col>
            </v-row>
        </v-alert>   

        <v-alert outlined color="error" prominent border="left">
            <h3 class="headline">Bike</h3>
            <div>
                Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero
                Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero
            </div>
            <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

            <v-row align="center" no-gutters>
                <v-col class="grow">
                    Please keep the bike in good condition!
                </v-col>
            </v-row>
        </v-alert>               
    </v-card> 
</template>