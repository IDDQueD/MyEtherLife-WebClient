// Account - Created and linked to the clients eth wallet.
export default class Account {
  constructor(walletAddress = '') {
    // Profile
    this.walletAddress = walletAddress;
    this.registrationDate = '';

    // Network - peer object
    this.networkConnection = null;
  }

  getWallet() {
    return this.walletAddress;
  }
}
