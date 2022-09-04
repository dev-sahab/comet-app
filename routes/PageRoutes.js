const express = require('express');
const { showHome, showshop, showsingle, showcategories, showSingleBlog, showtags } = require('../controllers/pageControllers')

// routes init
const routes = express.Router();

// routes
routes.get('/', showHome)
routes.get('/shop', showshop)
routes.get('/shop/:id', showsingle)
routes.get('/category/:cat', showcategories)
routes.get('/blog/:id', showSingleBlog)
routes.get('/tag/:tag', showtags)

// export
module.exports = routes;