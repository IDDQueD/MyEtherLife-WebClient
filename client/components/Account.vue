<template>
  <div class="account">
    <Alert>Network Status: {{(isConnected) ? 'Connected' : 'Disconnected' }}</Alert>
  </div>
</template>

<script>
  import { Alert } from 'iview'

  export default {
    name: "account",
    data() {
      return {
        connected: false
      }
    },
    components: {
      Alert
    },
    computed: {
      isConnected() {
        return this.$store.state.connected;
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .account {

  }
</style>
