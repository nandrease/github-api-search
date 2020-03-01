import {
  UNDO_BOOKMARK_CHANGE,
  ADD_BOOKMARK_ITEM,
  REMOVE_BOOKMARK_ITEM
} from '../mutation-types'

const myPluginWithSnapshot = store => {
  const currentState = JSON.parse(JSON.stringify(store.state))
  const stateHistory = [currentState]

  store.subscribe((mutation, state) => {
    if (mutation.type === UNDO_BOOKMARK_CHANGE) {
      stateHistory.pop()
      const lastItem = stateHistory[stateHistory.length - 1]
      if (lastItem.bookmarks) {
        store.dispatch('updateBookmarks', lastItem.bookmarks)
      }
    } else if (mutation.type === ADD_BOOKMARK_ITEM || mutation.type === REMOVE_BOOKMARK_ITEM) {
      const currentState = JSON.parse(JSON.stringify(state))
      stateHistory.push(currentState)
    }
  })
}

export default myPluginWithSnapshot
