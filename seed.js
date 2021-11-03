const path = require('path');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');

const {sequelize} = require('./db');
const {User, Item, Product} = require('./models');

const createUsers = async () => {
    let pw1 = await bcrypt.hash('1234', 2);
    let pw2 = await bcrypt.hash('key', 2);
    let pw3 = await bcrypt.hash('token',3)
    const users = [
        {name : 'Juliet', password: pw1},
        {name : 'David',  password : pw2},
        {name : 'Robin',  password : pw3}
    ];

    return users
}

const createItems = async () => {
    let pw3 = await bcrypt.hash('keypass', 2);
    let pw4 = await bcrypt.hash('securitypass', 2);
    let pw5 = await bcrypt.hash('codepass',2)
    const items = [
        {name :  pw3},
        {name :  pw4},
        {name :  pw5}
    ];

    return items
}

// const items = [
//     {name : 'Robert'},
//     {name : 'Sam'},
//     {name : 'Jordan'}
// ];

const products = [
    {name : 'Food'},
    {name : 'Jewelery'},
    {name : 'Icecream'}
];

const seed = async () => {

    await sequelize.sync({ force: true });

    const users = await createUsers(); // create users w/ encrypted passwords
    const items = await createItems();

    const userPromises = users.map(user => User.create(user))
    const itemPromises = items.map(item => Item.create(item))
    const productPromises = products.map(product => Product.create(product))
    await Promise.all([...userPromises, ...itemPromises, ...productPromises]);
    console.log("db populated!")
}

seed();