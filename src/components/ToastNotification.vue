<template>
  <md-snackbar
    v-if="active"
    :md-position="position"
    :md-duration="duration"
    :md-active="active"
  >
    <span>{{ message }}</span>
    <md-button v-show="showButton" class="md-primary" @click.once="undoChange">Undo</md-button>
  </md-snackbar>
</template>

<script>
export default {
  name: 'ToastNotification',
  data: () => ({
    position: 'center',
    isInfinity: false
  }),
  computed: {
    message () {
      return this.$store.getters.toastMessage
    },
    active () {
      return !!this.message
    },
    duration () {
      return this.$store.getters.toastDuration
    },
    showButton () {
      return this.$store.getters.toastButton
    }
  },
  methods: {
    undoChange () {
      return this.$store.dispatch('undoLastBookmarkAction')
    }
  }
}
</script>

<style>
</style>
