'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');

  // todoList Routes
  app.route('/user')
    .get(productsCtrl.get)
    .post(productsCtrl.store);


  app.route('/user/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};
