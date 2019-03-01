# express-boilerplate
A cool boilerplate with a router loader and other stuff!

## Features
* Automatically checks ``/routers`` folder for new routers and automatically hooks them up
* Static folder (``/static``) where you can put your html and stuff
* Config file to easily configure stuff

## Installation
1. ``git clone https://github.com/ohlookitsderpy/express-boilerplate``
2. ``npm i`` or ``yarn`` (yarn best btw)
3. ``npm start`` or ``yarn start`` (yarn gang)

## Config
### Example (can also be found in ``config.json``)
```json
{
    "port": 8080,
    "static": true
}
```
### Options
* Port - Port that the Express server runs on
* Static - Whether to use the static folder or not 