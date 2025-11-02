"use strict";

const Path = require("path");
const Express = require('express');
const Router = Express.Router();
const ProductController = require("../controllers/products");

Router.get("/", ProductController.GetProducts);

module.exports = Router;
