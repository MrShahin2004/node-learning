"use strict";

const Product = require("../models/product");
const Cart = require("../models/cart");

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
    Product.findById(ProdID, (product) => {
        res.render("shop/product-detail", {
            product: product,
            pageTitle: product.title,
            path: "/products"
        });
    });
}

exports.GetCart = (req, res, next) => {
    res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart"
    });
}

exports.PostCart = (req, res, next) => {
    let prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect("/cart");
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
