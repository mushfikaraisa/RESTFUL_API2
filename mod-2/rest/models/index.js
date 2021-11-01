const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class User extends Model {}
class Product extends Model {}

class Item extends Model {}

User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});


Item.init({
    name: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});

Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE
}, {
    sequelize,
    timestamps: false,
});

module.exports = {User, Item,Product};