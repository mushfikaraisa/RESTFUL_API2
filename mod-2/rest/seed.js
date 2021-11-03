const path = require('path');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');

const {sequelize} = require('./db');
const {User, Item, Product} = require('./models');

const createUsers = async () => {
    const users = [
        {name : 'Juliet', password: '5678'},
        {name : 'David', password : 'password'}
    ];

    return users
}


const items = [
    {name : 'Robert'},
    {name : 'Sam'},
    {name : 'Jordan'}
];

const products = [
    {name : 'Food'},
    {name : 'Jewelery'},
    {name : 'Icecream'}
];

const seed = async () => {

    await sequelize.sync({ force: true });

    const users = await createUsers(); // create users w/ encrypted passwords

    const userPromises = users.map(user => User.create(user))
    const itemPromises = items.map(item => Item.create(item))
    const productPromises = products.map(product => Product.create(product))
    await Promise.all([...userPromises, ...itemPromises, ...productPromises]);
    console.log("db populated!")
}

seed();