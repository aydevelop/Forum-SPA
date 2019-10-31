<template>
    <div class='name'>
        <v-btn icon @click="likeIt" >
            <v-icon :color="likeColor" >mdi-thumb-up-outline</v-icon> {{ count }}
        </v-btn>
    </div>
</template>

<script>
    export default {
        props:['reply'],
        data: ()=>({
            liked: true,
            count: 0
        }),
        mounted(){
            this.count = this.reply.like_count,
            this.liked = this.reply.liked
        },
        computed:{
            likeColor(){
                return this.liked ? "green" : "#00BCD4"
            }
        },
        methods:{
            likeIt(){
                if(User.loggedIn()){
                    this.liked = !this.liked
                    this.liked ? this.incr() : this.decr()
                }
            },
            incr(){
                this.$axios.$post(`like/${this.reply.id}`)
                this.count ++ 
            },
            decr(){
                this.$axios.$delete(`like/${this.reply.id}`)
                if(this.count>0){
                    this.count --
                }
            }
        }
    }
</script>

<style scoped>
</style>