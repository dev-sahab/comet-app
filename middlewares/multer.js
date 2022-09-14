const multer = require('multer');
const path = require('path');

// set storage
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/shop"))
    }, 
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
});

// upload photo
const upload = multer({
    storage : storage
}).single('product_img')

// export 
module.exports = upload