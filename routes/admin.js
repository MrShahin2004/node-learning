"use strict";

const Path = require("path");
const Express = require("express");
const RootDir = require("../utils/path");
const Router = Express.Router();

let ProductsArray = [];

Router.get("/add-product",
    (req, res) => {
        res.render("add-product", {pageTitle: "Add Product"});
    });

Router.post("/add-product",
    (req, res) => {
        ProductsArray.push({title: req.body.title});
        res.redirect("/");
    });

exports.router = Router;
exports.products = ProductsArray;
