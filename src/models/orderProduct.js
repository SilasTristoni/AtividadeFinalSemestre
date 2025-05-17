const Sequelize = require('sequelize');
const database = require('../config/database');

const OrderProducts = database.db.define('OrderProducts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'order_products',
    timestamps: false,
});

module.exports = OrderProducts;
