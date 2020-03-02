<template>
  <md-snackbar
    v-if="active"
    :md-position="position"
    :md-duration="toastDuration"
    :md-active="active"
  >
    <span>{{ toastMessage }}</span>
    <md-button v-show="toastButton" class="md-button md-primary md-raised md-theme-default" @click.once="undoChange">Undo</md-button>
  </md-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ToastNotification',
  data: () => ({
    position: 'center'
  }),
  computed: {
    ...mapGetters([
      'toastMessage',
      'toastDuration',
      'toastButton'
    ]),
    active () {
      return !!this.toastMessage
    }
  },
  methods: {
    ...mapActions({
      undoChange: 'undoLastBookmarkAction'
    })
  }
}
</script>

<style scoped lang="scss">
.md-button .md-button-content {
  color: #fefefe;
}
</style>
