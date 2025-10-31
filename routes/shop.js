"use strict";

const Path = require("path");
const Express = require('express');
const Router = Express.Router();
const RootDir = require("../utils/path");
const AdminData = require("./admin");

Router.get("/", (req, res) => {
    let Products = AdminData.products;
    res.render("shop", {prods: Products, pageTitle: "Shop", path: "/"});
});

module.exports = Router;
