'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve('dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// Server Initialization
var port = process.env.PORT || 9000;
console.log('Application listen on localhost:'+port);
app.listen(port);
