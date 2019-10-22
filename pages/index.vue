<template>
  <div>
    <toolbar />
    <app-home />
    <app-footer />
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
    AppFooter
  }
}

</script>
