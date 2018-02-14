// Settings - Global settings, debug etc.
export default class Settings {
  constructor() {
    console.log("Settings object created.");

    this.devMode = true;
  }

  isDevMode() {
    return this.devMode;
  }

  // methods
  logger(message) {
    if(this.devMode)
      console.log("[DEBUG]" + message);
  }
}
