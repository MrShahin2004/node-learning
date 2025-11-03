"use strict";

const Path = require("path");
const Express = require('express');
const Router = Express.Router();
const ProductsController = require("../controllers/products");

Router.get("/", ProductsController.GetProducts);

module.exports = Router;
