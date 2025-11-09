"use strict";

const Express = require("express");
const Router = Express.Router();
const CartController = require("../controllers/products");

Router.get("/cart", CartController.GoToCart);

exports.router = Router;
