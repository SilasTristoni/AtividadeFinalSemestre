const Orders = require('./orders');
const Products = require('./products');
const OrderProducts = require('./orderProduct');

Orders.belongsToMany(Products, {
  through: OrderProducts,
  foreignKey: 'orderId',
  otherKey: 'productId'
});

Products.belongsToMany(Orders, {
  through: OrderProducts,
  foreignKey: 'productId',
  otherKey: 'orderId'
});

module.exports = {
  Orders,
  Products,
  OrderProducts
};
