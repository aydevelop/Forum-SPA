<template>
    <div class='name'>
        <v-btn icon @click="likeIt" >
            <v-icon :color="likeColor" >mdi-thumb-up-outline</v-icon> <div class="ml-1"> {{ count }} </div>
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
                return this.liked ? "green" : "blue-grey darken-1"
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
            },
            decr(){
                this.$axios.$delete(`like/${this.reply.id}`)
            }
        },
        created(){
            Echo.channel('likeChannel')
                .listen('LikeEvent', (e) => {
                    if(this.reply.id == e.id){
                        console.log('like')
                        e.type == 1 ? this.count++ : this.count--
                    }
                });

            console.log("IDDD: " + 'App.User.' + User.id());

            Echo.private('App.User.' + User.id())
            .notification((notification) => {
                console.log(notification.type + "!!!!");
            });
        }
    }
</script>

<style scoped>
</style>