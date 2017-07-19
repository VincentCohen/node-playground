const InvoiceModel =  require('../models/invoice.js');

module.exports = class InvoiceService {

    create(params) {

        const invoice = new InvoiceModel({
            order: params.order,
            customer: params.customer,
            items: params.items,
            total_incl: params.total_incl, // should be calculated based on items
            total_excl: params.total_excl // should be calculated based on items
        });

        return invoice.save(function (err) {
            if (err) {
                console.log(err);
            }
        });

        // InvoiceModel.find().count(function(err, idx) {
        //     console.log(`Theres ${idx} amount of items`);
        // });
        
   }
}
