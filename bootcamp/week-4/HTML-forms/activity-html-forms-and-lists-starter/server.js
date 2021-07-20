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
app.use(express.static("public"));

//body-parsing
app.use(express.json());

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

app.get("/restaurants/:id", async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id, {
      include: {
        model: Menu,
        include: MenuItem,
      },
    });
    res.json(restaurant);
  });

app.listen(port, () => {
    console.log(`Your app is now listening to port http://localhost:${port}`);
})