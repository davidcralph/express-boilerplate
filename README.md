# express-boilerplate
A cool boilerplate with a router loader and other stuff!

## Features
* Automatically checks ``/routers`` folder for new routers and automatically hooks them up
* Static folder where you can put your html, files etc
* Ratelimiting
* Security headers (powered by [helmet](https://helmetjs.github.io))
* Logging (powered by [leekslazylogger](https://github.com/eartharoid/leekslazylogger))
* Config file to easily configure stuff

## Requirements
* Node.js 20.11 or newer

## Installation
1. ``git clone https://github.com/davidcralph/express-boilerplate``
2. ``npm i`` or ``yarn``
3. ``npm start`` or ``yarn start`` (``npm run dev`` to restart on file changes)

## Routers
Each ``.js`` file in ``src/routers`` should ``export default`` an Express ``Router``. They're loaded alphabetically before the server starts.

## Config
See ``config.json``

### Options
* Port - Port that the Express server runs on
* Static Enabled (true/false) - Whether to use the static folder or not
* Static Directory - The folder of data to serve if static is enabled (relative to ``src``)
* Logging Enabled (true/false) - Whether to log requests (logs are also written to ``./logs``)
* Ratelimit Enabled (true/false) - Whether to ratelimit requests
* Ratelimit Max Requests - Max requests per client per window
* Ratelimit Time - Window length in milliseconds
