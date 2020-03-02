<template>
  <md-card md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{item.name}}</div>
        <div class="md-subhead">{{item.owner.login}}</div>
        <p>
          <md-icon>star</md-icon>
          <strong>{{item.stargazers_count}}</strong>
        </p>
        <p>
          <md-icon>call_split</md-icon>
          <strong>{{item.forks_count}}</strong>
        </p>
      </md-card-header-text>

      <md-card-media>
        <md-avatar class="md-large">
          <img
            :src="item.owner.avatar_url"
            :alt="item.name"
          />
        </md-avatar>
      </md-card-media>
    </md-card-header>

    <md-card-actions>
      <md-button
        :href="item.html_url"
        :title="'GitHub repo ' + item.full_name"
        target="_blank"
      >
        Visit Github page
      </md-button>
      <md-button v-if="isActiveBookmark"
       @click="() => removeBookmarkItem(item.id)"
      >
        <md-icon class="md-primary">star</md-icon>
        Remove Bookmark
      </md-button>
      <md-button v-else
        @click="() => addBookmarkItem(item)"
      >
        <md-icon>star_border</md-icon>
        Add Bookmark
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CardComp',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    isActiveBookmark () {
      return this.$store.state.bookmarks.filter(bookmark => this.item.id === bookmark.id).length > 0
    }
  },
  methods: {
    ...mapActions([
      'addBookmarkItem',
      'removeBookmarkItem'
    ])
  }
}
</script>

<style lang="scss">
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  text-align: left;

  .md-title {
    word-break: break-all;
  }
}
</style>
