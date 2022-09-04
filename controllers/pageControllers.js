const { readFileSync } = require('fs');
const path = require('path');


// product data
const product_data = readFileSync(path.join(__dirname, '../db/product.json'));



// home page controller
const showHome = (req, res) => {
    
    // home Slider
    const homeSlider = readFileSync(path.join(__dirname, "../db/homeSlider.json"));
    const slider = JSON.parse(homeSlider.toString());
    
    // client
    const client_data = readFileSync(path.join(__dirname, "../db/client.json"))
    const client = JSON.parse(client_data.toString());

    // testimonial
    const testimonial = JSON.parse(readFileSync(path.join(__dirname, "../db/testimonial.json")).toString())

    // blog
    const blog = JSON.parse(readFileSync(path.join(__dirname, "../db/blog.json")).toString())

    res.render('index', {
        slider, client, testimonial, blog
    })
}

// shop page controller
const showshop = (req, res) => {
    const product = JSON.parse(product_data.toString());
    res.render('shop', {
        product : product
    })
}

// shop single page controller
const showsingle = (req, res) => {
    const singe_shop = JSON.parse(product_data).find( data => data.id == req.params.id)
    res.render('shop-single', {
        product : singe_shop
    })
}

// shop single page controller
const showcategories = (req, res) => {
    const product = JSON.parse(product_data.toString());
    res.render('category', {
        product,
        req
    })
}

// shop single page controller
const showtags = (req, res) => {
    const product = JSON.parse(product_data.toString());
    res.render('tags', {
        product,
        req
    })
}

// blog single
const showSingleBlog = (req, res) => {
    const blogs = JSON.parse(readFileSync(path.join(__dirname, "../db/blog.json")));
    const singleBlog = blogs.find( data => data.id == req.params.id)
    res.render('blog-single', {
        post : singleBlog
    })
}

// export
module.exports = {
    showHome,
    showshop,
    showsingle,
    showcategories,
    showSingleBlog,
    showtags
}