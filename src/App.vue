<template>
  <div id="app">
    <HeaderNav />
    <router-view/>
    <ToastNotification />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import ToastNotification from '@/components/ToastNotification.vue'

export default {
  components: {
    HeaderNav,
    ToastNotification
  }
}
</script>

<style lang="scss">
body {
  background: #fefefe;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
