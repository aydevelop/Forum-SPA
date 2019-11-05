<template>
    
  <v-container fluid grid-list-md>
    <v-layout >

       <v-flex xs3>
            <app-side-bar :category.sync="category" />
       </v-flex>

       
      <v-flex class="custom" xs9>
          <template v-if="questionsSelect.length">
            <question v-for="(q, index) in questionsSelect" 
            :question=q
            :key="q.path+'_'+index" >
            </question>
          </template>
          <div v-else class="text-center mt-10">
                <div v-if="showLoading">
                   <img class="loading_img" src="/loading.svg">
                </div>
                <div v-else>
                  Nothing found
                </div>
           </div>
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
      category: "",
      showLoading: "",
      questions: []
    }
  },
  components: {Question,AppSideBar},
  async created(){
    this.showLoading = true
    try {
      let {data} = await this.$axios.$get('question')
      this.questions = data;
    } finally {
      this.showLoading = false
    }
  },
  computed:{
      questionsSelect(){
          if(this.category !="" ){
              var self = this
              return this.questions.filter(function(q) {
                return q.category == self.category
              });
          }

          return this.questions
      }
  }
}

</script>

<style>
.custom a{
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #00BCD4;
}

.loading_img{
  width: 70px;
}
</style> 