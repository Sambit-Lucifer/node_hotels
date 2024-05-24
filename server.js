const express = require("express");
const app = express();
const connectDB = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Data will parse to javascript lang and store in req.body

require('dotenv').config();
// const Person = require("./models/Person");
// const MenuItem = require("./models/MenuIem");

const PORT = process.env.PORT || 4000;

app.get("/", function (req, res) {
  res.send("Welcome To Our Hotel");
});


connectDB();

// Import the router files
const personRoutes = require('./Routes/personRoutes')
const menuItemRoutes = require('./Routes/menuItemRoutes');

//use the routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
