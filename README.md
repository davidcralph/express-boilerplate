# express-boilerplate
A cool boilerplate with a router loader and other stuff!

## Features
* Automatically checks ``/routers`` folder for new routers and automatically hooks them up
* Static folder where you can put your html, files etc
* Config file to easily configure stuff

## Installation
1. ``git clone https://github.com/ohlookitsderpy/express-boilerplate``
2. ``npm i`` or ``yarn``
3. ``npm start`` or ``yarn start``

## Config
### Example (can also be found in ``config.json``)
```json
{
    "port": 8080,
    "static": {
        "enabled": true,
        "directory": "./static"
    }
}
```
### Options
* Port - Port that the Express server runs on
* Static Enabled (true/false) - Whether to use the static folder or not 
* Static Directory - The folder of data to serve if static is enabled
