'use strict';

const EventEmitter = require('events');
const http = require('http.min');

module.exports = class InfluxDb extends EventEmitter {

    constructor(options) {
        super();
        options = options || {};
        this.log = options.log || console.log;
        this.homey = options.homey;
        this.write_interval = 10;
        this.measurements = [];
        this.counter = 0;
        this.updateSettings(options);
    }
}

class Database {

    constructor() {

    }

    write() { }

    read() { }

    ping() { }

    write() { }
}

class DatabaseV1 extends Database {

    constructor() {
        super();
    }
}

class DatabaseV2 extends Database {

    constructor() {
        super();
    }
}
