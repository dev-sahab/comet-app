const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const expressLayout = require('express-ejs-layouts');
const pageRoutes = require('./routes/PageRoutes');
const { readFileSync } = require('fs');
const path = require('path');

// environment variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// EJS init
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set("layout", "layouts/layout")

// static folder
app.use(express.static('public'));

// routes
app.use(pageRoutes)

// server listen
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
})
