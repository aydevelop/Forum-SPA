<template>
        <v-card>
            <v-container>
                <v-card-title>
                    <div>
                        <div class="headline">
                            {{ data.title }}
                        </div>
                        <div class="grey--text subtitle">
                            {{ data.user }} said {{data.created_at}}
                        </div>
                    </div>   
                    <v-spacer></v-spacer>
                    <v-btn color="#00BCD4">
                        {{data.replies.length}} Replies
                    </v-btn>
                </v-card-title>

                <v-card-text v-html="body" >
                </v-card-text>

                <v-card-actions v-if="own">
                    <v-btn icon small @click="edit"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn icon small @click="deleteItem"><v-icon>mdi-delete</v-icon></v-btn>
                </v-card-actions>
            </v-container>
        </v-card>
</template>

<script>
import md from 'marked'
export default {
  props:['data'],
  data(){
      return{
          own: User.own(this.data.user_id)
      }
  },
  mounted(){
  },
  computed:{
      body(){
          return md.parse(this.data.body)
      }
  },
  methods:{
      deleteItem(){
          this.$axios.$delete('question/' + this.data.slug)
          this.$router.push('/forum')
      },
      edit(){
          EventBus.$emit('startEditing')
      }
  }
}

</script>

<style scoped>
    .subtitle{
         font-size: 1rem;
         font-weight: normal;
    }
</style>