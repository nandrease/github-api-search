import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_BOOKMARK_ITEM, REMOVE_BOOKMARK_ITEM, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './mutation-types'

Vue.use(Vuex)

let timeout = null

export default new Vuex.Store({
  state: {
    bookmarks: [],
    message: '',
    duration: 4000
  },
  getters: {
    bookmarksCount (state) {
      return state.bookmarks && state.bookmarks.length
    },
    toastMessage (state) {
      return state.message
    },
    toastDuration (state) {
      return state.duration
    }
  },
  mutations: {
    ADD_BOOKMARK_ITEM (state, bookmark) {
      state.bookmarks.push(bookmark)
    },
    REMOVE_BOOKMARK_ITEM (state, id) {
      state.bookmarks = state.bookmarks.filter(item => item.id !== id)
    },
    SHOW_NOTIFICATION (state, message) {
      state.message = message
    },
    HIDE_NOTIFICATION (state) {
      state.message = ''
    }
  },
  actions: {
    addBookmarkItem ({ commit, dispatch }, bookmark) {
      const bookmarkExists = this.state.bookmarks.length > 0 && this.state.bookmarks.find((item) => item.id === bookmark.id)
      if (bookmarkExists) {
        dispatch('showNotification', 'Bookmark with specified id already added')
      } else {
        commit(ADD_BOOKMARK_ITEM, bookmark)
        dispatch('showNotification', `Bookmark for ${bookmark.name} added`)
      }
    },
    removeBookmarkItem ({ commit, dispatch, state }, bookmarkId) {
      const bookmarkExists = state.bookmarks.length > 0 && state.bookmarks.find((item) => item.id === bookmarkId)
      if (bookmarkExists) {
        commit(REMOVE_BOOKMARK_ITEM, bookmarkId)
        dispatch('showNotification', `Bookmark for ${bookmarkExists.name} deleted`)
      } else {
        dispatch('showNotification', 'Sorry couldn\'t find the bookmark')
      }
    },
    showNotification ({ commit, state }, message) {
      if (timeout) clearTimeout(timeout)
      commit(SHOW_NOTIFICATION, message)
      timeout = setTimeout(() => {
        commit(HIDE_NOTIFICATION)
      }, state.duration)
    }
  }
})
