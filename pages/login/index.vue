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

        <div class="mt-4 red--text errors" v-if="error"> {{ error }} </div>
    </v-form>
  </v-container>
</template>>

<script>
export default {
    data(){
        return{
            error: "",
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods:{
        async login(){
            try {
                await User.login(this)
                //this.$refs.usernameInput.$forceUpdate()
               EventBus.$emit('login')
               this.$router.push('forum')
                //window.location = '/forum'
            } catch (e) {
                this.error = "Incorrect login or password";
            }
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