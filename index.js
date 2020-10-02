const express = require('express');
const app = express();
const fs = require('fs');
const ratelimit = require('express-rate-limit');

// Config
let config;
try {
    config = require('./config.json');
} catch (error) {
    throw new Error('Couldn\'t find \'./config.json\'');
}

// Logging
let log;
if (config.logging.enabled) {
    const Logger = require('leekslazylogger');
    log = new Logger();
    app.use(require('leekslazylogger-express'));
}

// Ratelimiting
if (config.ratelimit.enabled) app.use(ratelimit({
    windowMs: config.ratelimit.time,
    max: config.ratelimit.maxRequests
}));

// Check if all folders are intact
if (!fs.existsSync('./routers')) log.error('Couldn\'t find \'./routers\'');

// Hook up all the routers
fs.readdir('./routers/', (err, files) => {
    if (err) log.error(`Failed to load router: ${router}`);
    files.forEach(file => app.use(require(`./routers/${file}`)));
});

// Hook up the static folder (if enabled)
if (config.static.enabled) express.static(config.static.directory);

// Listen on port and notify when it is up
app.listen(config.port, log.info('Express Server Started'));
