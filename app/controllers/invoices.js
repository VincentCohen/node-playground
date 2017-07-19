const InvoiceService = require('../services/invoice.js');

exports.index = function (req, res) {
    res.send('list\n');
}

exports.show = function (req, res) {
  res.send('invoices\n');
}

exports.items = function (req, res) {
  res.send('items\n');
}

exports.create = function (req, res) {
    const service = new InvoiceService();

    const invoice = service.create(req.body);


    res.send('create\n');
}

exports.delete = function (req, res) {
    res.send('delete\n');
}

exports.print = function (req, res) {
    res.send('print\n');
}
