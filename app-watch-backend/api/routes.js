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

  // Api lất tất cả Sản phẫm
  app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store)
    
// api lấy sản phẩm thei ID
  app.route('/products/:ID')
    .delete(productsCtrl.delete)
    .put(productsCtrl.update);


  // Api loại sản phẫm
  app.route('/categorys')
  .get(productsCtrl.category)
  

  // Sản phâm theo IDLoai sản phẩm
  app.route('/products/:IDLoai')
    .get(productsCtrl.productByIdLoai)




    // Đơn hàng
    app.route('/order')
    .post(orderCtrl.order)


    //Chi tiết đơn hàng
    app.route('/order-detail')
    .post(orderCtrl.orderdetail)


    // Admin site

    app.route('/admin-login')
    .post(AdminCtrl.login)


    app.route('/users')
    .get(AdminCtrl.users)

    app.route('/users/:IDuser')
    .delete(AdminCtrl.delete)


    // Lấy đơn hàng

    app.route('/orders')
    .get(AdminCtrl.orders)






};
