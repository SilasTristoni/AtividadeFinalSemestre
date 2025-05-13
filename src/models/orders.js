const Sequelize = require('sequelize');
const database = require('../config/database');

const Orders = database.db.define('Orders', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    products: {
        type: Sequelize.JSON,
        allowNull: false,
    }
}, {
    tableName: 'orders'
});

module.exports = Orders;
