<template>
  <md-toolbar md-dense>
    <md-list>
      <md-list-item><router-link to="/" class="md-title">Search</router-link></md-list-item>
      <md-list-item><router-link to="/bookmarks" class="md-title">Bookmarks</router-link><span>  </span><md-badge :md-content="bookmarksCount"></md-badge></md-list-item>
    </md-list>
  </md-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderNav',
  computed: {
    ...mapGetters(['bookmarksCount'])
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
    font-weight: 500;

    &.router-link-exact-active {
      color: #0469b5;
    }
  }
}
</style>
