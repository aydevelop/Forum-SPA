<template>
    <div>
    <v-toolbar>
      <v-toolbar-title>
        <nuxt-link class="custom-a" to="/" >
          T38237
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <app-notification v-if="UserLoggedIn" ></app-notification>

      <v-toolbar-items>

        <v-btn text 
          v-for="item in reversedItems"
          :key="item.title"
          :to="item.to" 
        >
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import AppNotification from '~/components/AppNotification.vue'

export default {
  data(){
    return {
      dUserLoggedIn: false,
      items: [
        { title:'Forum', to:'/forum', show: true },
        { title:'Login', to:'/login', show: false },
        { title:'Logout', to:'/logout', show: true },
        { title:'Ask Question', to:'/ask', show: true },
        { title:'Category', to:'/category', show: true },
      ]
    }
  },
  computed: {
    reversedItems: function () {
      return this.items.filter(q => q.show == this.dUserLoggedIn)
    }
  },
  methods:{
    UserLoggedIn(){
      this.dUserLoggedIn = User.loggedIn();
    }
  },
  created(){
      this.UserLoggedIn()
      
      EventBus.$on('logout', ()=>{
        User.logout();
      })

      EventBus.$on('login', ()=>{
        this.UserLoggedIn()
      })
  },
  components:{AppNotification}
}
</script>

<style scoped>
.custom-a{
  color:white;
  text-decoration: none;
}
</style>