'use strict';

const PORT = 3000;
const HOST = '0.0.0.0';

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const app = express();
const models = join(__dirname, './models');

var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/app', function(){
    useMongoClient: true
});


// Load models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)));

// Load routes
require('./routes')(app);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
