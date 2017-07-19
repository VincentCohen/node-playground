const InvoiceService = require('../services/invoice.js');

const service = new InvoiceService();

/**
 * List all invoices
 */
exports.index = (req, res) => {

    service.findAll().then( (invoices) => {
        res.send(invoices);
    });
}

/**
 * Show specific invoice
 */
exports.show = (req, res) => {
  res.send('invoices\n');
}

/**
 * Show all items in an invoice
 */
exports.items = (req, res) => {
  res.send('items\n');
}

/**
 * Create a new invoice
 */
exports.create = (req, res) => {
    try {
        const invoice = service.create(req.body);
        
        res.send(invoice);
    } catch (e) {
        res.status(422);
        res.send(e);
    }
}

/**
 * Delete an invoice
 */
exports.delete = (req, res) => {
    res.send('delete\n');
}

/**
 * Print an invoice to PDF 
 */
exports.print = (req, res) => {
    res.send('print\n');
}
