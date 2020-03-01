<template>
  <md-toolbar md-dense>
    <md-list>
      <md-list-item><router-link to="/" class="md-title">Search</router-link></md-list-item>
      <md-list-item><router-link to="/bookmarks" class="md-title">Bookmarks</router-link><span>  </span><md-badge :md-content="bookmarksCount"></md-badge></md-list-item>
    </md-list>
  </md-toolbar>
</template>

<script>
export default {
  name: 'HeaderNav',
  computed: {
    bookmarksCount () {
      return this.$store.getters.bookmarksCount
    }
  }
}
</script>

<style scoped lang="scss">
.md-toolbar {
  justify-content: center;

  .md-list {
    flex-flow: row nowrap;
    background: transparent;
  }

  .md-badge {
    margin-left: 5px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
