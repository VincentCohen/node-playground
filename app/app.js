const PORT = 3000;
const HOST = '0.0.0.0';

const fs = require('fs');
const join = require('path').join;

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const models = join(__dirname, './models');

// Set up database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://db/app' , {useMongoClient: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
