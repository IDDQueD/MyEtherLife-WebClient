<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1">
              Home
            </MenuItem>
            <MenuItem name="2">
              Shop
            </MenuItem>
          </div>
        </Menu>

        <Notification message='Network Status: disconnected' />

      </Header>
      <Content>

      </Content>
    </Layout>
  </div>
</template>

<script>
  // Components
  import Client from '../components/Client.vue'
  import AccountView from '../components/Account'
  import Notification from '../components/Notification'

  // JS objects
  import NetworkManager from '../common/Network/NetworkManager'
  import DatabaseManager from '../common/Data/DatabaseManager'
  import Account from '../common/Account/Account'
  import Settings from '../common/Settings'

  import {Card, Layout, MenuItem, Menu} from 'iview'

  // Managers
  let networkManager = null;
  let databaseManager = null;
  let settings = null;


  export default {
    components: {
      Client,
      Notification,
      AccountView,

      Card,
      Layout,
      Menu,
      MenuItem
    },
    // default variables / states
    data: function () {
      return {
        gameName: 'My Ether Life',
        clientVersion: '0.0.1'
      };
    },
    created() {
      // Setup the managers
      this.settings = new Settings();
      this.networkManager = new NetworkManager();
      this.databaseManager = new DatabaseManager();
      this.databaseManager.useNetworkManager(this.networkManager);
    }
  }
</script>

<style scoped>
  .layout {
    margin: auto auto;
    background: #f5f7f9;

    overflow: hidden;
  }

  .layout-nav {
    width: auto;
    margin: auto auto;
  }
</style>
