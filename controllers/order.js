const { findById, findAll } = require('../models/order');


module.exports.all = function(req, res) {
  findAll()
    .then(r => {
    res.json(r);
  })
  .catch(err => {
    res.json(err);
  })
};

module.exports.byId = function(req, res) {

  findById(req.params.id)
    .then(r => {
    res.json(r);
    })
    .catch(err => {
      res.status(404).json(err);
    })

};