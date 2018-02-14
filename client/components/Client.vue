<template>
  <Card class="client-wrapper">
    <div id="client">
      <unity src="Build/Build.json" width="auto" height="auto" unityLoader="Build/UnityLoader.js"></unity>
    </div>
  </Card>
</template>

<script>
  import Unity from '../components/Unity'
  import { Card } from 'iview'

  export default {
    components: {
      Unity,
      Card
    }
  }
</script>

<style>
  .client-wrapper {
    margin: auto auto;
    width: 600px;
    height: auto;
    text-align: center;
    user-select: none;
  }
  #client {
    margin: 0 auto;
    width: 600px;
    height: 400px;
  }
</style>

<!--     <Button @click="$store.commit('CONNECT')">Connect</Button>
         <Button @click="$store.commit('DISCONNECT')">Disconnect</Button> -->
