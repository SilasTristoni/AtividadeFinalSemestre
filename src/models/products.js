const Sequelize = require('sequelize');
const database = require('../config/database');

const Products = database.db.define('Products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'products',
    timestamps: false,
});

module.exports = Products;