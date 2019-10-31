<template>
    
  <v-container fluid grid-list-md>
    <v-layout >

       <v-flex xs3>
            <app-side-bar />
       </v-flex>

       
      <v-flex class="custom" xs9>
          <question v-for="(q, index) in questions" 
          :question=q
          :key="q.path+'_'+index" >
          </question>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
import Question from '~/components/Question.vue'
import AppSideBar from '~/components/AppSideBar.vue'

export default {
  data(){
    return{
      questions: []
    }
  },
  components: {Question,AppSideBar},
  async created(){
    let {data} = await this.$axios.$get('question')
    this.questions = data;
  }
}

</script>

<style>
.custom a{
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #00BCD4;
}
</style> 