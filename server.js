'use strict';

const express = require('express');
const path = require('path');
const chalk = require('chalk');
const util = require('util');
const app = express();

app.use(express.static(path.resolve('www/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('www/index.html'));
});

// Server Initialization
let port = process.env.PORT || 9000;
let message = chalk.bold.green('Application listening on localhost:',port)
util.log(message);
app.listen(port);
