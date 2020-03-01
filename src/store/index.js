import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_BOOKMARK_ITEM, REMOVE_BOOKMARK_ITEM } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookmarks: []
  },
  getters: {
    bookmarksCount (state) {
      return state.bookmarks.length
    }
  },
  mutations: {
    ADD_BOOKMARK_ITEM (state, bookmark) {
      state.bookmarks.push(bookmark)
    },
    REMOVE_BOOKMARK_ITEM (state, id) {
      state.bookmarks = state.bookmarks.filter(item => item.id === id)
    }
  },
  actions: {
    addBookmarkItem (context, bookmark) {
      const bookmarkExists = this.state.bookmarks.length > 0 && this.state.bookmarks.find((item) => item.id === bookmark.id)
      if (bookmarkExists) {
        console.log('Bookmark with specified id already exists')
      } else {
        context.commit(ADD_BOOKMARK_ITEM, bookmark)
      }
    },
    removeBookmarkItem ({ commit }, bookmarkId) {
      const bookmarkExists = this.state.bookmarks.length > 0 && this.state.bookmarks.find((item) => item.id === bookmarkId)
      if (bookmarkExists) {
        commit(REMOVE_BOOKMARK_ITEM, bookmarkId)
      } else {
        console.log('No bookmark with specified id')
      }
    }
  }
})
