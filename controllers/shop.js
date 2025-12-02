"use strict";

const Product = require("../models/product");

exports.GetIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/index", {
            prods: products,
            pageTitle: "Shop",
            path: "/"
        });
    });
}

exports.GetProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", {
            prods: products,
            pageTitle: "All Products",
            path: "/products",
        });
    });
};

exports.GetProduct = (req, res, next) => {
    let ProdID = req.params.productId;
    console.log(ProdID);
    res.redirect("/");
}

exports.GetCart = (req, res, next) => {
    res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart"
    });
}

exports.GetOrders = (req, res, next) => {
    res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your Orders"
    });
}

exports.GetCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        path: "/checkout",
        pageTitle: "Checkout"
    });
}
