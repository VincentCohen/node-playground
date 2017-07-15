'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('NodeJs playground!');
});

app.get('/invoices', (req, res) => {
  res.send('invoices\n');
});

app.get('/invoices/{id}', (req, res) => {
  res.send('single invoice\n');
});

app.get('/invoices/{id}/items', (req, res) => {
  res.send('invoice items listing\n');
});

app.get('/invoices/{id}/print', (req, res) => {
  res.send('print a single invoice\n');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
