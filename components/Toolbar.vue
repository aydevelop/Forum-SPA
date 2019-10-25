<template>
    <div>
    <v-toolbar>
      <v-toolbar-title>T38237</v-toolbar-title>
    
      <v-spacer></v-spacer>

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
//import Logo from '~/components/Logo.vue'

export default {
  data(){
    return {
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
      return this.items.filter(q => q.show == User.loggedIn());
    }
  },
  created(){
      EventBus.$on('logout', ()=>{
        User.logout();
      })
  }
}
</script>