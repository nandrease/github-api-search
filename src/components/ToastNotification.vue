<template>
  <md-snackbar
    v-if="active"
    :md-position="position"
    :md-duration="duration"
    :md-active="active"
  >
    <span>{{ message }}</span>
    <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
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
    }
  }
}
</script>

<style>
</style>
