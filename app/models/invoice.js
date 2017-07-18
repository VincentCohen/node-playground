const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  order:  String,
  customer: String,
  date: {type: Date, default: Date.now },
  items: [{ title: String, quantity: Number, price_excl: Number, price_incl: Number }],
  total_incl: Number,
  total_excl: Number
});

InvoiceSchema.path('total_incl').required(true, 'Total incl  can not be empty');
InvoiceSchema.path('total_excl').required(true, 'Total excl can not be empty');

module.exports = mongoose.model('InvoiceModel', InvoiceSchema);
