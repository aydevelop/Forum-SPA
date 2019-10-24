<template>
  <v-container>
    <h2>Sign up</h2>
    <v-form @submit.prevent="signup">
        <v-text-field
        label="Name"
        v-model="form.name"
        type="text"
        required
        ></v-text-field>
        <div class="red--text" v-if="errors.name"> {{ errors.name[0] }} </div>

        <v-text-field
        label="E-mail"
        v-model="form.email"
        type="email"
        required
        ></v-text-field>
        <div class="red--text" v-if="errors.email"> {{ errors.email[0] }} </div>

        <v-text-field
        label="Password"
        v-model="form.password"
        type="password"
        required
        ></v-text-field>
        <div class="red--text" v-if="errors.password"> {{ errors.password[0] }} </div>

        <v-btn type="submit">
            Sign up
        </v-btn>
         <v-btn to="/login" nuxt>
            Login
        </v-btn>
    </v-form>
  </v-container>
</template>>

<script>
export default {
    data(){
        return{
            form: {
                email: "",
                password: "",
                name: "",
                password_confirmation: ""
            },
            errors: {}
        }
    },
    methods:{
        signup(){
            this.$axios.$post('auth/signup', this.form)
            .then(res => User.responseAfterLogin(res))
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>