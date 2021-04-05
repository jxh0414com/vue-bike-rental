<template>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
        <v-container>
            <v-subheader>Customer Information</v-subheader>
            <v-row>
                <v-col cols="12" md="6">
                <v-text-field
                    v-model="order.first_name"
                    :rules="rules.requiredRules"
                    label="First name"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                <v-text-field
                    v-model="order.last_name"
                    :rules="rules.requiredRules"
                    label="Last name"
                    required
                ></v-text-field>
                </v-col>
            </v-row>

            <v-text-field v-model="order.email" :rules="rules.emailRules" label="E-mail" required></v-text-field>

            <v-text-field v-model="order.phone" :rules="rules.requiredRules" label="Phone" required></v-text-field>
            
            <v-text-field v-model="order.address" :rules="rules.requiredRules" label="Address" required></v-text-field>

            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="order.state"
                        :rules="rules.requiredRules"
                        label="State"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="order.city"
                        :rules="rules.requiredRules"
                        label="City"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="order.zip"
                        :rules="rules.zipRules"
                        label="ZIP Code"
                        required
                        type="number"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-subheader>Billing Address</v-subheader>

            <v-text-field v-model="order.credit_card" :rules="rules.creditCardRules" label="Credit Card" type="number" required></v-text-field>

            <v-row>
                <v-col cols="4" md="4">
                <v-text-field
                    v-model="order.expire_mm"
                    :rules="rules.expiresRules"
                    type="number"
                    label="MM"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="4" md="4">
                <v-text-field
                    v-model="order.expire_yy"
                    :rules="rules.expiresRules"
                    type="number"
                    label="YY"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="4" md="4">
                <v-text-field
                    v-model="order.card_cvc"
                    :rules="rules.cvcRules"
                    type="number"
                    label="CVC"
                    required
                ></v-text-field>
                </v-col>
            </v-row>

            <v-radio-group v-model="order.same_address">
                <v-radio label="Same as customer address" :value="true"></v-radio>
                <v-radio label="Different address" :value="false"></v-radio>
            </v-radio-group>

            <template v-if="!order.same_address">
                <v-text-field v-model="order.billing_address" :rules="rules.requiredRules" label="Address" required></v-text-field>
                
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="order.billing_state"
                            :rules="rules.requiredRules"
                            label="State"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="order.billing_city"
                            :rules="rules.requiredRules"
                            label="City"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="order.billing_zip"
                            :rules="rules.zipRules"
                            label="ZIP Code"
                            type="number"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </template>

            <v-row>
                <v-col cols="12" class="text-right">
                    <v-btn color="success lighten-1" type="submit">
                        Submit
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
      rules: {
        requiredRules: [v => !!v || "This field is required"],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
        zipRules: [v =>  !!v || 'This field is required', v => (v && v.length === 5) || 'ZIP must be a number with length of 5'],
        creditCardRules: [v => !!v || 'This field is required', v => (v && v.length === 16) || 'Credit card/Debit card must be length of 16'],
        expiresRules: [v => !!v || 'This field is required', v => (v && v.length === 2) || 'Please enter the valid expires date with only two digit'],
        cvcRules: [v => !!v || 'This field is required', v => (v && v.length === 3) || 'Please enter the valid expires date with only two digit'],
        },
    }),
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                window.alert('Thank you for renting our bike. Hope you have a great time!')
                this.$router.push({ name: 'home' })
                this.$store.commit('emptyCart')
            }
        }
    },
  }
</script>

<style>

</style>