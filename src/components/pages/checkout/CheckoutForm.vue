<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
            <v-subheader>Customer Information</v-subheader>
            <v-row>
                <v-col cols="12" md="6">
                <v-text-field
                    v-model="order.first_name"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                <v-text-field
                    v-model="order.last_name"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                ></v-text-field>
                </v-col>
            </v-row>

            <v-text-field v-model="order.email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field v-model="order.phone" :rules="emailRules" label="Phone" required></v-text-field>
            
            <v-text-field v-model="order.address" :rules="emailRules" label="Address" required></v-text-field>

            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="order.state"
                        :rules="nameRules"
                        :counter="10"
                        label="State"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="order.city"
                        :rules="nameRules"
                        :counter="10"
                        label="City"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="order.zip"
                        :rules="nameRules"
                        :counter="10"
                        label="ZIP Code"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-subheader>Billing Address</v-subheader>

            <v-text-field v-model="order.credit_card" :rules="emailRules" label="Credit Card" required></v-text-field>

            <v-row>
                <v-col cols="4" md="4">
                <v-text-field
                    v-model="order.expire_mm"
                    :rules="nameRules"
                    :counter="10"
                    label="MM"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="4" md="4">
                <v-text-field
                    v-model="order.expire.yy"
                    :rules="nameRules"
                    :counter="10"
                    label="YY"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="4" md="4">
                <v-text-field
                    v-model="order.card_cvc"
                    :rules="nameRules"
                    :counter="10"
                    label="MM"
                    required
                ></v-text-field>
                </v-col>
            </v-row>

            <v-radio-group v-model="order.same_address">
                <v-radio label="Same as customer address" :value="true"></v-radio>
                <v-radio label="Different address" :value="false"></v-radio>
            </v-radio-group>

            <template v-if="!order.same_address">
                <v-text-field v-model="order.billing_address" :rules="emailRules" label="Address" required></v-text-field>
                
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="order.billing_state"
                            :rules="nameRules"
                            :counter="10"
                            label="State"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="order.billing_city"
                            :rules="nameRules"
                            :counter="10"
                            label="City"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="order.billing_zip"
                            :rules="nameRules"
                            :counter="10"
                            label="ZIP Code"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </template>

            <v-row>
                <v-col cols="12" class="text-right">
                    <v-btn color="success lighten-1" @click="resetValidation">
                    Reset Validation
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      order: {
            first_name :"",
            last_name: "",
            email: "",
            phone: "",
            address: "",
            state: "",
            city: "",
            zip: "",
            credit_card: "",
            expire_mm: "",
            expire_yy: "",
            card_cvc: "",
            same_address: true,
            billing_address: "",
            billing_state: "",
            billing_city: "",
            billing_zip: ""
      },
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style>

</style>