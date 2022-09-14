const express = require('express');
const { dashboar_panel, products, storeProductsData, deleteData, editData, updateEditedData } = require('../controllers/dashboardController');
const multer = require('../middlewares/multer');



// router init
const routes = express.Router();

// routes
routes.get('/', dashboar_panel);
routes.get('/products', products);
routes.post('/products', multer, storeProductsData);

routes.get('/products/edit/:id', editData);
routes.post('/products/update/:id', multer,  updateEditedData);

routes.get('/products/delete/:id', deleteData);


// export
module.exports = routes