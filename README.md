# express-boilerplate
A cool boilerplate with a router loader and other stuff!

## Features
* Automatically checks ``/routers`` folder for new routers and automatically hooks them up
* Static folder where you can put your html, files etc
* Ratelimiting
* Logging (powered by [leekslazylogger](https://github.com/eartharoid/leekslazylogger))
* Config file to easily configure stuff

## Installation
1. ``git clone https://github.com/davidcralph/express-boilerplate``
2. ``npm i`` or ``yarn``
3. ``npm start`` or ``yarn start``

## Config
See ``config.json``

### Options
* Port - Port that the Express server runs on
* Static Enabled (true/false) - Whether to use the static folder or not
* Static Directory - The folder of data to serve if static is enabled
