<template>
    <div v-if="question">
        <edit-question v-if="editing" :question.sync="question" :data = question >
        </edit-question>

        <div v-else>
            <show-question :data = question >
            </show-question>
        </div>

        <replies :qSlug="question.slug" :replies=question.replies ></replies>

        <v-container v-if="UserLoggedIn">
            <new-reply :qSlug="question.slug"></new-reply>
        </v-container>
        <v-container class="mt-6 text-center" v-else>
            <nuxt-link to="/login">
                Log in to reply
            </nuxt-link>
        </v-container>
    </div>
</template>

<script>

import ShowQuestion from '~/components/ShowQuestion.vue'
import EditQuestion from '~/components/EditQuestion.vue'
import Replies from '~/components/Reply.vue'
import NewReply from '~/components/NewReply.vue'

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
        EditQuestion,
        Replies,
        NewReply
    }, 
    computed: {
        UserLoggedIn(){
            return User.loggedIn();
        }
    },
    mounted(){
        EventBus.$on('startEditing',()=>{
            this.editing = true
        })

        EventBus.$on('cancelEditing',()=>{
            this.editing = false
        })

        EventBus.$on('newReply',(reply)=>{
            this.question.replies.push(reply.reply)
        })
    }
}
</script>

<style>

</style>