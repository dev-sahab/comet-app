const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');

// dashboard
const dashboar_panel = (req, res) => {
    const products = JSON.parse(readFileSync(path.join(__dirname, "../db/product.json")));
    const blogs = JSON.parse(readFileSync(path.join(__dirname, "../db/blog.json")));
    const sliders = JSON.parse(readFileSync(path.join(__dirname, "../db/homeSlider.json")));
    const clients = JSON.parse(readFileSync(path.join(__dirname, "../db/client.json")));
    const testimonials = JSON.parse(readFileSync(path.join(__dirname, "../db/testimonial.json")));
    res.render('dashboard/index', {
        product : products,
        blog : blogs,
        slider : sliders,
        testimonial : testimonials,
        client : clients
    })
}

// products
const products = (req, res) => {
    const products = JSON.parse(readFileSync(path.join(__dirname, "../db/product.json")));
    
    res.render('dashboard/product', {
        product : products
    })
}
// store products
const storeProductsData = (req, res) => {
    const products = JSON.parse(readFileSync(path.join(__dirname, "../db/product.json")));

    const {title, price, category, tag} = req.body;

    let last_id = 1
    if (products.length > 0){
        last_id = products[products.length - 1].id + 1
    }
    products.push({
        id : Date.now(),
        title,
        price,
        cat : category,
        tag,
        img : req.file ? '/images/shop/' + req.file.filename : "/images/index.png"
    })

    writeFileSync(path.join(__dirname, "../db/product.json"), JSON.stringify(products));
    res.redirect('/dashboard/products')

}



// edit product data
const editData = (req, res) => {
    // product data
    const products = JSON.parse(readFileSync(path.join(__dirname, "../db/product.json")));

    const singleData = products.find( data => data.id == req.params.id);

    res.render('dashboard/edit.ejs',{
        products,
        proItem : singleData
    })

}

// Update edit product data
const updateEditedData = (req, res) => {
    // product data
    const products = JSON.parse(readFileSync(path.join(__dirname, "../db/product.json")));

    // get update id
    const {id} = req.params;

    const prodImg = products[products.findIndex( data => data.id == id)].img;

    products[products.findIndex( data => data.id == id)] = {
        ...products[products.findIndex( data => data.id == id)],
        title : req.body.title,
        price : req.body.price,
        cat : req.body.category,
        tag : req.body.tag,
        img : req.file ? '/images/shop/' + req.file.filename : prodImg
    }

    writeFileSync(path.join(__dirname, '../db/product.json'), JSON.stringify(products))
    res.redirect('/dashboard/products')

}

// delete product data
const deleteData = (req, res) => {
    // product data
    const products = JSON.parse(readFileSync(path.join(__dirname, "../db/product.json")));

    const updatedData = products.filter( data => data.id != req.params.id);

    writeFileSync(path.join(__dirname, "../db/product.json"), JSON.stringify(updatedData));
    res.redirect("/dashboard/products")

}

// exports
module.exports = {
    dashboar_panel,
    products,
    storeProductsData,
    deleteData,
    editData,
    updateEditedData
}