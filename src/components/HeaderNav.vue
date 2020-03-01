<template>
  <md-toolbar md-dense>
      <router-link to="/" class="md-title">Search</router-link>
      <span class="md-title"> | </span>
      <router-link to="/bookmarks" class="md-title">Bookmarks</router-link>
  </md-toolbar>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style scoped lang="scss">
.md-toolbar {
  justify-content: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
}
</style>
