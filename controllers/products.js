"use strict";

const Product = require("../models/product");

exports.GetAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.PostAddProduct = (req, res) => {
    let product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

exports.GetProducts = (req, res, next) => {
    let ProductsArray = Product.fetchAll();
    res.render('shop', {
        prods: ProductsArray,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: ProductsArray.length > 0,
        activeShop: true,
        productCSS: true
    });
};
