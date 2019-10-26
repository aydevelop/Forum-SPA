<template>
  <v-container>
    <h2>Login</h2>
    <v-form @submit.prevent="login">
        <v-text-field
        label="E-mail"
        v-model="form.email"
        type="email"
        required
        ></v-text-field>
        <v-text-field
        label="Password"
        v-model="form.password"
        type="password"
        required
        ></v-text-field>

        <v-btn  type="submit">
            Login
        </v-btn>

        <v-btn to="/signup" nuxt>
            Sign UP
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
                password: ""
            }
        }
    },
    methods:{
        async login(){
            await User.login(this)
            window.location = '/forum'
        }
    },
    created(){
        console.log("created")
        if(User.loggedIn()){
            this.$router.push('forum')
        }
    }
}
</script>

<style>

</style>