import Peer from './Peer'
import IPFS from 'ipfs'
//import IPFSRoom from 'ipfs-pubsub-room'

// NetworkManager - Keeps track of all p2p connects over IPFS.
// All connections will be exposed to the client.
export default class NetworkManager {
  constructor() {
    console.log("NetworkManager object created.");

    this.initialized = false;

    this.ipfs = null;
    this.ipfsRoom = null;
    this.peersList = [];

    this.init();
  }

  // Internal setup / initialization
  init() {
    if(this.initialized) {
      console.log('NetworkManager already initialized.');
      return;
    }

    this.setupP2P();

    this.initialized = true;

    console.log('NetworkManager intialization successful.');
  }

  // Refactor into repo pattern
  // Move events to its own script, perhaps an Event Manager.
  setupP2P() {

    let ipfsOptions = {
      EXPERIMENTAL: {
        pubsub: true
      },
    };

    this.ipfs = new IPFS(ipfsOptions);

    this.ipfs.on('error', (e) => console.error(e));
    this.ipfs.on('ready', () => {

    });
  }

  // Peer management

  // addPeer(Peer) - Add a peer object to the list of peers. Minor fail-safes.
  // returns true on success
  addPeer(peer) {
    if(this.peersList.contains(peer)) {
      // The peer object is already in the list... meaning we technically should be connected...
      return false;
    }

    this.peersList.push(peer);
    return true;
  }

  // removePeer(Peer) - Remove a peer object to the list of peers. Minor fail-safes.
  // returns true on success
  removePeer(peer) {
    if(!this.peersList.contains(peer)) {
      return false; // return false because the peer wasn't in the list. Might cause unwanted actions...
    }

    this.peersList.splice(this.peersList.indexOf(peer), 1);
    return true;
  }

  // isPeerConnected(Peer) - Check if a peer is connected to the network
  isPeerConnected(peer) {
    if(!this.peersList.contains(peer)) {
      // We are treating this list like a woman. (It's always right.) You're 100% not connected if you're not in this list.
      return false;
    }

    return true;
  }
}
