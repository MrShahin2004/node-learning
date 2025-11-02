"use strict";

const Path = require("path");
const Express = require("express");
const ProductsController = require("../controllers/products");
const Router = Express.Router();

Router.get("/add-product", ProductsController.GetAddProduct);

Router.post("/add-product", ProductsController.PostAddProduct);

exports.router = Router;
