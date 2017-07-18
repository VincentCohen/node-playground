const PORT = 3000;
const HOST = '0.0.0.0';

const fs = require('fs');
const join = require('path').join;

const express = require('express');

const app = express();
const models = join(__dirname, './models');

const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/app', function() { useMongoClient: true });

// Load files
function load(src)
{
  fs.readdirSync(src)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(join(src, file)));
}

load(models);

// Load routes
require('./routes')(app);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
