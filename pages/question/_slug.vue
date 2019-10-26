<template>
    <show-question
        :data = question
    >
    </show-question>
</template>

<script>

import ShowQuestion from '~/components/ShowQuestion.vue'
export default {
    data(){
        return {

        }
    },
    async asyncData({$axios, params}){
      console.log("slug____" + params.slug)
      let {data} = await $axios.$get('question/'+params.slug);
      return {question:data}
    },
    components:{
        ShowQuestion
    },
    mounted(){
    }
}
</script>

<style>

</style>