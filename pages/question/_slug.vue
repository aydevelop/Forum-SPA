<template>
    <div v-if="question">
        <edit-question v-if="editing" :question.sync="question" :data = question >
        </edit-question>

        <div v-else>
            <show-question :data = question >
            </show-question>
        </div>
    </div>
</template>

<script>

import ShowQuestion from '~/components/ShowQuestion.vue'
import EditQuestion from '~/components/EditQuestion.vue'

export default {
    data(){
        return {
            editing: false
        }
    },
    async asyncData({$axios, params}){
      console.log("slug____" + params.slug)
      let {data} = await $axios.$get('question/'+params.slug);
      console.log('stringify ' + JSON.stringify(data))
      return {question:data}
    },
    components:{
        ShowQuestion,
        EditQuestion
    },
    mounted(){
        EventBus.$on('startEditing',()=>{
            this.editing = true
        })

        EventBus.$on('cancelEditing',()=>{
            this.editing = false
        })
    }
}
</script>

<style>

</style>