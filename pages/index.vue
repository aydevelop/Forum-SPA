<template>
  <div>
    <toolbar />
    <login></login>
    <app-footer />
  </div>
</template>

<script>

import AppHome from '@/components/AppHome.vue'
import Toolbar from '@/components/Toolbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import Login from '@/components/login/Login'

export default {
  components: {
    AppHome,
    Toolbar,
    AppFooter,
    Login
  }
}

</script>
