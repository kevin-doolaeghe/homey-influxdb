# Homey - InfluxDB support

### Homey support for InfluxDB

## Author

Kevin DOOLAEGHE

## Setup

* Install [Node.JS](https://nodejs.org/en) and [Docker](https://www.docker.com/products/docker-desktop/) on your computer.

* Install Homey CLI using the following command :
```
npm install --global --no-optional homey
```

* Create a Homey app :
```
homey app create
```

* Inside your project directory, run the Homey app :
```
homey app run
```
:warning: Docker must be running to run the app.

> After you are logged in Homey CLI presents you with a list of available Homeys connected to your Athom account in the command-line window. Select the Homey on which you want to run the Homey App and it will start uploading and running automatically.
> 
> While the Homey App is running it will print debug logging to the command-line window. In order to quit running the Homey App, press `CTRL + C` and it will be uninstalled.

## Useful commands

> A number of commands which might be useful are listed below :
> * Login with a different account using : `homey logout` / `homey login`
> * Switch to a different Homey using : `homey select`
> * Run a Homey App in development mode without keeping your command-line window open : `homey app install`
> * Publish a Homey App to the Homey App Store : `homey app publish`
> 
> If you want to learn about all other functionalities provided by Homey CLI use the `--help` flag to list all possible commands :
> ```
> homey --help
> ```

## References

* [Homey Developer](https://homey.app/en-us/developer/)
* [Homey Developer - Getting started](https://apps.developer.homey.app/the-basics/getting-started)
* [InfluxData - Documentation](https://docs.influxdata.com/)
* [InfluxData - InfluxDB OSS - Getting started](https://docs.influxdata.com/influxdb/v2/)
* [InfluxData - InfluxDB API - Guide](https://docs.influxdata.com/influxdb/v2/api-guide/)
* [InfluxData - InfluxDB API - Reference](https://docs.influxdata.com/influxdb/v2/api/)
* [`balmli`'s `homey-influxdb` repository on Github](https://github.com/balmli/homey-influxdb)