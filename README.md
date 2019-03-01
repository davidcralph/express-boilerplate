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
    "express": {
        "port": 8080,
        "static": true
    },
    "logging": {
        "enabled": true,
        "colour": true,
        "file": true
    }
}
```
### Options
#### Express
Express settings for making your server cool!
* Port - Port that the Express server runs on (number)
* Static - Whether to use the static folder or not (true/false) 
#### Logging
Logging settings for doing stuff like toggling colours and file storage.
* Enabled - Whether the feature is enabled or not
* Colour - Whether to use colours in logging
* File - Whether to store log files or not