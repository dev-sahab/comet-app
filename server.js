const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const expressLayout = require('express-ejs-layouts');
const pageRoutes = require('./routes/PageRoutes');
const dashboardRoute = require('./routes/dashboarRoutes');
const { readFileSync } = require('fs');
const path = require('path');

// environment variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// express init
const app = express();

// data manage
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// EJS init
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set("layout", "layouts/layout")

// static folder
app.use(express.static('public'));

// routes
app.use('/dashboard', dashboardRoute)
app.use(pageRoutes)

// server listen
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
})