<template>
  <app-header />
  <RouterView />
</template>
  
<script>
import appHeader from './components/header.vue'

export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },

  components: {
    appHeader,
  },
}

</script>

<style>
</style>
