const Sequelize = require('sequelize');
const database = require('../config/database');

const Categories = database.db.define('Categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: 'categories'
});

module.exports = Categories;