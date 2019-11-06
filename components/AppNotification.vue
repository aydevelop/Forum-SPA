<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn icon :color="rColor"
                v-on="on" >
                    <v-icon >mdi-bell-alert-outline</v-icon>
                    {{ unreadCount }}
                </v-btn>
                
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in unread" :key="item.data.question + index">
                            <v-list-item-title @click="readIt(item,index)">
                                {{ item.data.question }}
                            </v-list-item-title>
                </v-list-item>
            </v-list>
<!-- 
            <v-list>
                <v-list-item v-for="item in read" :key="item.id">
                    <v-list-item-title>{{ item.data.question }}</v-list-item-title>
                </v-list-item>
            </v-list> -->
        </v-menu>
    </div>
</template>

<script>
    export default {
        data:()=>({
            read: {},
            unread: {},
            unreadCount: 0
        }),
        async created(){
            if(User.loggedIn()){
                let data = await this.$axios.$get('notifications')
                this.read = data.read
                this.unread = data.unRead
                if(this.unread){
                    this.unreadCount = this.unread.length
                }
            }
        },
        methods:{
           async readIt(item, index){
                await this.$axios.$post('markAsRead', {id:item.id})                
                console.log("path: " + item.data.path) 
                this.unread.splice(index, 1);
                this.unreadCount = this.unread.length
                this.$router.push('/' + item.data.slug)
            }
        },
        computed:{
            rColor(){
                return this.unreadCount > 0 ? "pink" : "blue-grey darken-1" 
            }
        },
        mounted() {
            Echo.channel('qChannel')
                .listen('QEvent', (e) => {                    
                    console.log('QEvent1')
                    if(e.data.user_id == User.id()){
                        console.log('QEvent2')
                        //console.log(JSON.stringify(e.data.question))
                        this.unread.unshift({'data': {'question': e.data.question.title
                        , 'path': 'question/' + e.data.question.title
                        , 'slug': 'question/' + e.data.question.slug }})
                        this.unreadCount = this.unread.length                           
                    }
                });
        }
    }
</script>

<style scoped>
</style>