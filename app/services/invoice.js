'use strict'

const InvoiceModel =  require('../models/invoice.js');

var model_errors = require('../helpers/model_errors.js');

module.exports = class InvoiceService {
    constructor() {
        // console.log('construct');
    }

    create() {

        console.log('--create--');

        for (let i = 0; i < 12; i++) {
            var invoice = new InvoiceModel({total_excl: 1 + i, total_incl: i +  2});

            var saved = invoice.save(function (err,a,b) {
                if (err) {
                    console.log(err);
                }
            });

            console.log(`created invoice ${invoice.id}`);
        } 

        InvoiceModel.find().count(function(err, idx) {
            console.log(`Theres ${idx} amount of items`);
        });
        
   }
}
