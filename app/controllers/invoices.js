'use strict';

const mongoose = require('mongoose');

exports.index = function (req, res) {
    // console.log (mongoose.model('Invoice'));

    res.send('list\n');
}

exports.show = function (req, res) {
  res.send('invoices\n');
}

exports.items = function (req, res) {
  res.send('items\n');
}

exports.create = function (req, res) {
    res.send('create\n');
}

exports.delete = function (req, res) {
    res.send('delete\n');
}

exports.print = function (req, res) {
    res.send('print\n');
}
