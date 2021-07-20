//Express
const express = require('express');
const { check, validationResult } = require("express-validator"); // ??
const app = express();
const port = 3000;

//HB
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
    allowInsecurePrototypeAccess,
  } = require("@handlebars/allow-prototype-access");

//Models
const Restaurant = require("./models/restaurant");
const Menu = require("./models/menu");
const MenuItem = require("./models/menuItem");
  
//db
const initializeDb = require('./initializeDb');
initializeDb();

//Handlebars Configuration
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
});
app.engine("handlebars", handlebars);
app.set("view engine", "handlebars");

//serve static files
app.use(express.static(__dirname + '/public'));

//body-parsing
app.use(express.json());
app.use(express.urlencoded()); //need this or else req.body will be an {}

app.get('/web/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.render('restaurants',{restaurants}) //restaurants view + exposing hb module with restaurants
})

app.get('/web/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id, {
        include: {
            model: Menu,
            include: MenuItem
        }
    });
    console.log('MENUS??', restaurant.Menus)
    res.render('restaurant', {restaurant});
})

app.get('/new-restaurant-form', async (req, res) => {
  res.render('newRestaurant')
})


app.post('/new-restaurant', async (req,res) => {
  console.log(req.body)
  const newRestaurant = await Restaurant.create(req.body)
  const foundRestaurant = await Restaurant.findByPk(newRestaurant.id)
  if(foundRestaurant) {
    res.send('new restaurant has been created~!')
  } else {
    console.error('Failed to create new Restaurant')
  }
})

//Think about how you would add a menu:

//Challenge: How would you update a menu?


app.listen(port, () => {
    console.log(`Your app is now listening to port http://localhost:${port}`);
})