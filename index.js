// Import modules
const express = require('express');
const app     = express();

const { readFileSync, existsSync, readdir } = require('fs');

// Check if all folders are intact (Tried detecting config but it got messy)
if (!existsSync('./routers')) throw new Error('Couldn\'t find \'./routers\'!');

// Hook up all the routers
readdir('./routers/', (err, files) => { // Start https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
    if (err) return console.log(err);
    files.forEach(file => {
        const router = require(`./routers/${file}`);
        let name = file.split(".")[0];
        app.use('/', router);
    });
}); // End https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)

// Hook up the static folder
express.static('./static');

// Listen on port and notify when it is up
app.listen(8080, () => { console.log('Server Started!') });
