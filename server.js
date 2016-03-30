'use strict';

const express = require('express');
const path = require('path');
const chalk = require('chalk');
const util = require('util');
const portfinder = require('portfinder');
const app = express();

app.use(express.static(path.resolve('www/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('www/index.html'));
});

// Server Initialization
let port = process.env.PORT || 9000;
portfinder.basePort = port;

// Look for a free port searching from @port and initialize server
portfinder.getPort((err, freePort) => {
    if (port !== freePort) {
      port = freePort;
    }

    let message = chalk.bold.green('Application listening on localhost:', port);
    util.log(message);
    app.listen(port);
});
