'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

  async onInit() {
    this.log('MyApp has been initialized');
    // this.homey.on('', () => this.on);
  }

}

module.exports = MyApp;
