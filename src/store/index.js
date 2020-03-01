import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import myPluginWithSnapshot from './plugins/myPluginWithSnapshot'
import {
  ADD_BOOKMARK_ITEM,
  REMOVE_BOOKMARK_ITEM,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  UNDO_BOOKMARK_CHANGE,
  UPDATE_BOOKMARKS
} from './mutation-types'

Vue.use(Vuex)

let timeout = null

export default new Vuex.Store({
  strict: true,
  plugins: [
    myPluginWithSnapshot,
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    bookmarks: [],
    message: '',
    duration: 4000,
    showActionButton: true
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
    },
    toastButton (state) {
      return state.showActionButton
    }
  },
  mutations: {
    ADD_BOOKMARK_ITEM (state, bookmark) {
      state.bookmarks.push(bookmark)
    },
    REMOVE_BOOKMARK_ITEM (state, id) {
      state.bookmarks = state.bookmarks.filter(item => item.id !== id)
    },
    SHOW_NOTIFICATION (state, { message, showActionButton }) {
      state.message = message
      state.showActionButton = showActionButton
    },
    HIDE_NOTIFICATION (state) {
      state.message = ''
    },
    UNDO_BOOKMARK_CHANGE () {},
    UPDATE_BOOKMARKS (state, bookmarks) {
      state.bookmarks = bookmarks
    }
  },
  actions: {
    addBookmarkItem ({ commit, dispatch }, bookmark) {
      const bookmarkExists = this.state.bookmarks.length > 0 && this.state.bookmarks.find((item) => item.id === bookmark.id)
      if (bookmarkExists) {
        dispatch('showNotification', { message: 'Bookmark with specified id already added' })
      } else {
        commit(ADD_BOOKMARK_ITEM, bookmark)
        dispatch('showNotification', { message: `Bookmark for ${bookmark.name} added` })
      }
    },
    removeBookmarkItem ({ commit, dispatch, state }, bookmarkId) {
      const bookmarkExists = state.bookmarks.length > 0 && state.bookmarks.find((item) => item.id === bookmarkId)
      if (bookmarkExists) {
        commit(REMOVE_BOOKMARK_ITEM, bookmarkId)
        dispatch('showNotification', { message: `Bookmark for ${bookmarkExists.name} deleted` })
      } else {
        dispatch('showNotification', { message: 'Sorry couldn\'t find the bookmark' })
      }
    },
    showNotification ({ commit, state }, { message, showActionButton = true }) {
      if (timeout) clearTimeout(timeout)
      commit(SHOW_NOTIFICATION, { message, showActionButton })
      timeout = setTimeout(() => {
        commit(HIDE_NOTIFICATION)
      }, state.duration)
    },
    undoLastBookmarkAction ({ commit }) {
      commit(UNDO_BOOKMARK_CHANGE)
    },
    updateBookmarks ({ commit, dispatch }, bookmarks) {
      commit(UPDATE_BOOKMARKS, bookmarks)
      dispatch('showNotification', { message: 'Reverted last change', showActionButton: false })
    }
  }
})
