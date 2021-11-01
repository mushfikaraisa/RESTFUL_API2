const express = require("express");
const basicAuth = require('express-basic-auth');
const bcrypt = require('bcrypt');

const {User, Item} = require('./models');

// initialise Express
const app = express();

// specify out request bodies are json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1>')
})
app.listen(3000, () => {
  console.log("Server running on port 3000");
});