const InvoiceModel =  require('../models/invoice.js');

module.exports = class InvoiceService {

    findAll() {
        return InvoiceModel.find()
        .then( (items) => { return items;})
        .catch( (err) => { console.log(err) });
    }

    create(params) {

        const invoice = new InvoiceModel({
            order: params.order,
            customer: params.customer,
            items: params.items,
            total_incl: params.total_incl, // should be calculated based on items
            total_excl: params.total_excl // should be calculated based on items
        });

        invoice.save( (err) => {
            if (err) throw err;
        });

        return invoice        
   }
}
