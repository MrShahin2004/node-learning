"use strict";

const Express = require("express");
const AdminController = require("../controllers/admin");
const Router = Express.Router();

// "/admin/add-product" (GET)
Router.get("/add-product", AdminController.GetAddProduct);

// "/admin/products" (GET)
Router.get("/products", AdminController.GetProducts);

// "/admin/add-product" (POST)
Router.post("/add-product", AdminController.PostAddProduct);

// "/admin/edit-product/:productId" (GET)
Router.get("/edit-product/:productId", AdminController.GetEditProduct);

exports.router = Router;
