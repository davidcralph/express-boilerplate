// Import modules
const express = require('express');
const app = express();
const fs = require('fs');

// Import config
let config;
try {
    config = require('./config.json');
} catch (error) {
    throw new Error('Couldn\'t find \'./config.json\'');
}

// Check if all folders are intact
if (!fs.existsSync('./routers')) throw new Error('Couldn\'t find \'./routers\'');

// Hook up all the routers
fs.readdir('./routers/', (err, files) => files.forEach(file => app.use('/', require(`./routers/${file}`))));

// Hook up the static folder (if enabled)
if (config.static.enabled) express.static(config.static.directory);

// Listen on port and notify when it is up
app.listen(config.port, console.log('Info: Express Server Started'));
