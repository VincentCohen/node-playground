'use strict';

// Controllers
const invoices = require('./controllers/invoices');

module.exports = function(app) {

    app.get('/', (req, res) => {
        res.send('NodeJs playground!');
    });

    app.get('/invoices',  invoices.index);
    app.get('/invoices/:id', invoices.show);
    app.get('/invoices/:id/print', invoices.print);
    app.post('/invoices', invoices.create);
    app.get('/invoices/:id/items', invoices.items);
}