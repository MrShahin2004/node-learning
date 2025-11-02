"use strict";

const Path = require("path");
const Express = require("express");
const ProductsController = require("../controllers/products");
const Router = Express.Router();

let ProductsArray = [];

Router.get("/add-product",
    (req, res) => {
        res.render("add-product", {pageTitle: "Add Product", path: "/admin/add-product"});
    });

Router.post("/add-product",
    (req, res) => {
        ProductsArray.push({title: req.body.title});
        res.redirect("/");
    });

exports.router = Router;
exports.products = ProductsArray;
