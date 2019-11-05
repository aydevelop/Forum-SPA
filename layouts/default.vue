<template>
  <div>
    <v-app :dark="false">
      <toolbar ref="usernameInput" />
      <div class="default-nuxt-layout">
        <nuxt />
      </div>
      <app-footer />
    </v-app>
  </div>
</template>

<script>

import AppHome from '@/components/AppHome.vue'
import Toolbar from '@/components/Toolbar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHome,
    Toolbar,
    AppFooter,
  }
}

</script>

<style scoped>
.default-nuxt-layout{
  margin-top:70px;
  margin-bottom: 120px; 
}
</style>