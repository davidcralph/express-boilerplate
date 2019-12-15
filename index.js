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
fs.readdir('./routers/', (err, files) => { // Start https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
    if (err) return console.log(err);
    files.forEach(file => {
        const router = require(`./routers/${file}`);
        let name = file.split('.')[0];
        app.use('/', router);
    });
}); // End https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)

// Hook up the static folder (if enabled)
if (config.static) express.static('./static');

// Listen on port and notify when it is up
app.listen(config.port, console.log('Info: Express Server Started'));
