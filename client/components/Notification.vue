<template>
  <Alert id="notification">{{ message }}</Alert>
</template>

<script>
  import { Alert } from 'iview'

  export default {
    props: ['message'],
    components: {
      Alert
    },
  }
</script>

<style scoped>

</style>
