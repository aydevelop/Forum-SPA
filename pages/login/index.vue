<template>
  <v-container>
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

        <v-btn color="green" type="submit">
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
                password: ""
            }
        }
    },
    methods:{
        async login(){
            try {
                let data = await this.$axios.$post('auth/login', this.form);
            }catch(e){
                console.log("errrrrrror: " + JSON.stringify(e.response));
            }
        }
    }
}
</script>

<style>

</style>