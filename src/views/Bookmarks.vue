<template>
  <div class="bookmarks-page">
    <h1>Saved bookmarks</h1>
    <md-empty-state
      v-if="!bookmarks.length"
      md-icon="devices_other"
      md-label="No bookmarks are selected"
      md-description="Please add bookmarks to your selection first."
    >
      <router-link to="/">
        <md-button class="md-primary md-raised">Search GitHub</md-button>
      </router-link>
    </md-empty-state>
    <card-comp
      v-for="item in bookmarks"
      :key="item.id"
      :item="item"
    ></card-comp>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardComp from '@/components/CardComp.vue'

export default {
  name: 'Bookmarks',
  components: {
    CardComp
  },
  computed: {
    ...mapState(['bookmarks'])
  }
}
</script>
