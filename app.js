const express = require("express");
// const basicAuth = require('express-basic-auth');
const bcrypt = require('bcrypt');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const cors = require('cors'); 

require('dotenv').config('.env'); // Note: env vars should not be used in production

const {User, Item, Product} = require('./models');

// initialise Express
const app = express();
app.use(cors());

// specify out request bodies are json
app.use(express.json());
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}`,
  algorithms: ['RS256']
  });
// app.use(basicAuth({
//   authorizer : Authorize, //custom authorizer fn
//   authorizeAsync: true, //allow our authorizer to be async
//   unauthorizedResponse : () => 'Basic Authentication!'
// }))

// //compares username + password with what's in the database
// // Returns boolean indicating if password matches
// async function Authorize(username, password, callback){
//   try {
//     // get user from DB
//     const user = await User.findOne({where : {name : username}})
//     // isValid == true if user exists and passwords match, false if no user or passwords don't match
//     let isValid = (user != null) ? await bcrypt.compare(password, user.password) : false;
//     callback(null, isValid); //callback expects null as first argument
//   } catch(err) {
//     console.log(" AN ERROR!", err)
//     callback(null, false);
//   }
// }
app.get('/', (req, res) => {
  res.send('<h1>Hello!!!!</h1>')
})

app.get('/users', checkJwt, async (req, res) => {
  //what should i put here?
  let users = await User.findAll()
  res.json({users});
})

app.get('/users/:id', async (req, res) => {
  let user = await User.findByPk(req.params.id);
  res.json({user});
})

app.post('/users', async (req, res) => {
  let newUser = await User.create(req.body);
  res.json({newUser});
})

// I want to get all items

app.get('/items', async(req, res)=> {
  let items = await Item.findAll();
  res.json({items});
})

// I want to get one item

app.get('/items/:id', async(req, res)=> {
  let item = await Item.findByPk(req.params.id);
  res.json({item});
})

// I want to delete one item

app.delete('/items/:id', async(req, res)=> {
  await Item.destroy({where: {id: req.params.id}});
  res.send('Deleted!')
})

// I want to create one item

app.post('/items', async(req, res)=> {
  let newItem = await Item.create(req.body);
  res.json({newItem})
})

// I want to update one item

app.put('/items/:id', async(req, res)=> {
  let updatedItem = await Item.update(req.body, {
    where : {id : req.params.id}
  });
  res.json({updatedItem})
})

app.listen(3000, () => {
  console.log("Server running on port 3000");

  app.get('/products', async(req, res)=> {
    let products = await Product.findAll();
    res.json({products});
  })
  

  app.put('/products/:id', async(req, res)=> {
    let updatedProduct = await Product.update(req.body, {
      where : {id : req.params.id}
    });
    res.json({updatedProduct})
  })
  app.post('/products', async(req, res)=> {
    let newProduct = await Product.create(req.body);
    res.json({newProduct})
  })
  app.delete('/products/:id', async(req, res)=> {
    await Product.destroy({where: {id: req.params.id}});
    res.send('Deleted!')
  }) 
});
// Created Restful-API2