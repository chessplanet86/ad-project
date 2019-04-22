<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6> <!--md4 заменил на md6 и форма стала шире -->
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form
                ref="form"
                v-model="valid"
                validation
                >
                  <v-text-field 
                  prepend-icon="person" 
                  name="email" 
                  label="Email" 
                  type="email"
                  v-model='email'
                  :rules="emailRules"
                  ></v-text-field>
                  <v-text-field 
                  prepend-icon="lock" 
                  name="password" 
                  label="Password"
                  type="password"
                  :counter="counter"
                  :rules="passwordRules"
                   
                  v-model='password'
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="primary"
                @click="onSubmit"
                :disabled="!valid"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            valid: false,
            counter: 6,
            emailRules:[
                v => !!v || 'E-mail is required', // условия на валидацию емейла
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ], 
            passwordRules:[
                v => !!v || 'Password is required',
                v => (v && v.length >=6) || 'Password must be equal or more than 6 characters'
            ],

        }
    },
    methods: {
        onSubmit(){
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password
                }
                console.log(user)
            }
        }
    },
    
}
</script>