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
                <v-list-item v-for="item in unread" :key="item.id">
                        <nuxt-link :to="`/${item.data.path}`" >
                            <v-list-item-title @click="readIt(item)">
                                {{ item.data.question }}
                            </v-list-item-title>
                        </nuxt-link>
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
                let data = await this.$axios.$post('notifications')
                this.read = data.read
                this.unread = data.unRead
                if(this.unread){
                    this.unreadCount = this.unread.length
                }
            }
        },
        methods:{
           async readIt(item){
                await this.$axios.$post('markAsRead', {id:item.id})
                //this.unread.splice(Notification)
            }
        },
        computed:{
            rColor(){
                return this.unreadCount > 0 ? "pink" : "blue-grey darken-1" 
            }
        }
    }
</script>

<style scoped>
</style>