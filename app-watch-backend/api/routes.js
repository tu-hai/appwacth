'use strict';
module.exports = function(app) {
  const productsCtrl = require('./controllers/ProductsController');
  const loginCtrl = require('./controllers/LoginController');
  const orderCtrl = require('./controllers/orderController');
  const AdminCtrl =require('./controllers/adminSiteController') 
  const cors = require('cors')
  app.use(cors())


  // Login 
  app.route('/login')
  .post(loginCtrl.login)
  // register
  app.route('/register')
  .post(loginCtrl.register)

  // Api Sản phẫm
  app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store);

  // Api loại sản phẫm
  app.route('/categorys')
  .get(productsCtrl.category)
  

  // Sản phâm theo IDLoai
  app.route('/products/:IDLoai')
    .get(productsCtrl.productByIdLoai)
    .post(productsCtrl.store);

  app.route('/user/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);


    // Đơn hàng
    app.route('/order')
    .post(orderCtrl.order)


    //Chi tiết đơn hàng
    app.route('/order-detail')
    .post(orderCtrl.orderdetail)


    // Admin site

    app.route('/admin-login')
    .post(AdminCtrl.login)







};
