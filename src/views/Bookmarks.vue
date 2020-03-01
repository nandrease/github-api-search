<template>
  <div class="bookmarks-page">
    <h1>Saved bookmarks</h1>
    <template v-if="!bookmarks.length">
      <p>No bookmarks are selected.</p>
      <p>Please <router-link to="/">add bookmarks to your selection</router-link> first.</p>
    </template>
    <card-comp
      v-for="item in bookmarks"
      :key="item.id"
      :item="item"
      @remove-bookmark-item="removeFromBookmarks"
    ></card-comp>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue'

export default {
  name: 'Bookmarks',
  components: {
    CardComp
  },
  computed: {
    bookmarks () {
      return this.$store.state.bookmarks
    }
  },
  methods: {
    removeFromBookmarks (bookmarkId) {
      this.$store.dispatch('removeBookmarkItem', bookmarkId)
    }
  }
}
</script>
