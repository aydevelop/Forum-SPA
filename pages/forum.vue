<template>
    
  <v-container fluid grid-list-md>
    <v-layout >
      <v-flex xs9>
          <question v-for="(q, index) in questions" 
          :question=q
          :key="q.path+'_'+index" >
          </question>
      </v-flex>

       <v-flex xs3>
          sidebar
       </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
import Question from '~/components/Question.vue'

export default {
  data(){
    return{
      questions: []
    }
  },
  components: {Question},
  async created(){
    let {data} = await this.$axios.$get('question')
    this.questions = data;
  }
}

</script>

<style>

</style> 