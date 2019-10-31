<template>
    <v-container>
        <div v-for="(reply,index) in replies" :key="reply.reply+index">
            <v-card class="mt-5">
                <v-card-title>
                    <div class="custom">
                        {{ reply.user }}  said  {{ reply.created_at }}
                    </div>
                    <v-spacer></v-spacer>
                    <like :reply = reply></like>
                </v-card-title>
                <v-divider></v-divider>
                <div v-if="editId!=reply.id">
                    <v-card-text v-html="htmlParse(reply.reply)"></v-card-text>
                </div>
                <div class="edit" v-else>
                    <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
                </div>    
                
                <v-card-actions v-if="reply.user_id==UserId">
                    <div v-if="editId!=reply.id">
                        <v-btn icon small @click="editItem(reply.id)"><v-icon>mdi-pencil</v-icon></v-btn>
                        <v-btn icon small @click="deleteItem(index,reply.id)"><v-icon>mdi-delete</v-icon></v-btn>
                    </div>
                    <div v-else>
                        <v-btn @click="updateItem(reply)" icon small><v-icon>mdi-content-save</v-icon></v-btn>
                        <v-btn @click="editId=0" icon small><v-icon>mdi-cancel</v-icon></v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>

<script>
    import VueSimplemde from 'vue-simplemde'
    import EditReply from '~/components/EditReply.vue'
    import Like from '~/components/Like.vue'

    import md from 'marked'
    export default {
        props: ['replies','qSlug'],
        data:()=>({
            editId:0
        }),
        components:{
            EditReply,
            VueSimplemde,
            Like
        },
        computed: {
            UserId(){
                return User.id()
            }
        }, 
        methods:{
            editItem(id){
                this.editId = id
            },
            async updateItem(item){
                let data = {body:item.reply}
                await this.$axios.$put(`question/${this.qSlug}/reply/${item.id}`, data)
                this.editId = 0
            },
            async deleteItem(index, id){
                await this.$axios
                .$delete(`question/${this.qSlug}/reply/${id}`)
                this.replies.splice(index,1)        
            },
            htmlParse(value){
                return md.parse(value)
            }
        }
    }
</script>

<style scoped>
.custom{
    font-weight: normal;
}
.edit vue-simplemde{
    height: 50px
}
</style>