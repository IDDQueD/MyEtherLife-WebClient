<template>
  <div class="statusbar">
    <Alert>Network Status: {{(isConnected) ? 'Connected' : 'Disconnected' }}</Alert>
  </div>
</template>

<script>
	export default {
		name: "status-bar"
	}
</script>

<style scoped>

</style>
