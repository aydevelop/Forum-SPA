<template>
    <div>
    <v-toolbar>
      <v-toolbar-title>T38237</v-toolbar-title>
    
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>Forum</v-btn>
        <v-btn text>Ask Question</v-btn>
        <v-btn text>Category</v-btn>
        <v-btn text to="/login" nuxt>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'

export default {
  components: {}
}
</script>