<template>
  <v-layout>
    <v-flex xs10 offset-xs1>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"><nuxt-link :to="question.path">{{ question.title }}</nuxt-link></h3>
            <div class="grey--text">
              {{ question.user }} said {{ question.created_at }}
            </div>
          </div>
        </v-card-title>
        <v-card-text>
            {{ question.body }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
 
<script>
//import Logo from '~/components/Logo.vue'

  export default {
    props:['question']
  }

</script>

<style>

</style>