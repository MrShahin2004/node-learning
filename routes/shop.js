"use strict";

const Express = require('express');
const Router = Express.Router();
const ShopController = require("../controllers/shop");

Router.get("/", ShopController.GetIndex);

Router.get("/products", ShopController.GetProducts);

Router.get("/products/:productId", ShopController.GetProduct);

Router.get("/cart", ShopController.GetCart);

Router.get("/orders", ShopController.GetOrders);

Router.get("/checkout", ShopController.GetCheckout);

module.exports = Router;
