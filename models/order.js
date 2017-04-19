const { db, m } = require('../db');

let order = new m.Schema({
  name: String,
  status: Number
});

let Order = m.model('Orders', order);

module.exports.findById = function(id) {
  return Order.findOne({_id: id});
};

module.exports.findAll = function() {
  return Order.find();
};
