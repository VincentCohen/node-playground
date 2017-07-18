'use strict'

const InvoiceModel =  require('../models/invoice.js');

var model_errors = require('../helpers/model_errors.js');

module.exports = class InvoiceService {
    constructor() {
        // console.log('construct');
    }

    create() {

        var invoice = new InvoiceModel();

        invoice.save(function (err,a,b) {
            if (err) model_errors(err);
        });
   }
}
