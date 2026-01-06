"use strict";

const Product = require("../models/product");

exports.GetAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product"
    });
}

exports.PostAddProduct = (req, res) => {
    let Title = req.body.title;
    let ImageURL = req.body.imageURL;
    let Description = req.body.description;
    let Price = req.body.price;
    let product = new Product(Title, ImageURL, Description, Price);
    product.save();
    res.redirect("/");
}

exports.GetEditProduct = (req, res, next) => {
    let EditMode = req.query.edit;
    if (!EditMode) {
        return res.redirect("/");
    }

    let ProdID = req.params.productId;
    Product.findById(ProdID, (product) => {
        if (!product) {
            return res.redirect("/");
        }

        res.render("admin/edit-product", {
            pageTitle: "Edit Product",
            path: "/admin/edit-product",
            editing: EditMode,
            product: product
        });
    });
}

exports.GetProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("admin/products", {
            prods: products,
            pageTitle: "Admin Products",
            path: "/admin/products"
        });
    });
}
