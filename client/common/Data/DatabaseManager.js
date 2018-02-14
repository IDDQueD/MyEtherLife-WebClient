import IPFS from 'ipfs'
import OrbitDB from 'orbit-db'

// DatabaseManager - Manage the orbit database.
export default class DatabaseManager {
  constructor() {
    console.log("DatabaseManager object created.");

    this.networkManager = null;
    this.initialized = false;
    this.database = null;

    this.init();
  }

  // Internal setup / initialization
  init() {
    if (this.initialized) {
      console.log('DatabaseManager already initialized.');
      return;
    }

    this.setupDB();
    this.initialized = true;

    console.log('DatabaseManager intialization successful.');
  }

  useNetworkManager(networkManager) {
    this.networkManager = networkManager;

    // Assign the network manager and setup the database
    this.setupDB();
  }

  // Refactor into repo pattern
  // Move events to its own script, perhaps an Event Manager.
  async setupDB() {
    console.log('networkmanager: ' + this.networkManager + ' | ipfs: ' + this.networkManager.ipfs);
    // Create a database
    this.database = new OrbitDB(this.networkManager.ipfs);
    let db = await this.database.log('database name');
    // Add an entry to the database
    let hash = await db.add('hello world');
    // Get last 5 entries
    let latest = db.iterator({limit: 5}).collect();
    console.log(JSON.stringify(latest, null, 2))
  }

  // getDatabase() - returns the orbit-db object
  getDatabase() {
    return this.database;
  }
}

