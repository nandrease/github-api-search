<template>
  <div class="bookmarks-page">
    <h1>This is an bookmarks page</h1>
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
import sampleData from '@/assets/sampleData.json'
import CardComp from '@/components/CardComp.vue'

export default {
  name: 'Bookmarks',
  components: {
    CardComp
  },
  data () {
    return {
      bookmarks: sampleData || []
    }
  },
  methods: {
    removeFromBookmarks (bookmarkId) {
      this.bookmarks = this.bookmarks.filter(item => item.id !== bookmarkId)
    }
  }
}
</script>
