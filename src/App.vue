<template>
  <div id="app">
    <HeaderNav />
    <div class="main-content">
      <router-view/>
    </div>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main {
  &-content {
    padding: 50px;
  }
  &-title {
    font-size: 32px;
    font-weight: normal;
  }
}
</style>
