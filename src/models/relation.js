const User = require('./User');
const Order = require('./orderProduct.js');
const Product = require('./Product');
const Category = require('./Category');
const OrderProduct = require('./orderProduct');


User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });


Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'orderId', otherKey: 'productId' });
Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'productId', otherKey: 'orderId' });

module.exports = {
  User,
  Order,
  Product,
  Category,
  OrderProduct
};