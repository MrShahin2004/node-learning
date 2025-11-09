"use strict";

// Imported the necessary modules.
const Path = require("path");
const Express = require("express");
const BodyParser = require("body-parser");
const ErrorController = require("./controllers/error");

// Created an app.
const App = Express();

App.set("view engine", "ejs");
App.set("views", "views");

const AdminRoutes = require("./routes/admin");
const ShopRoute = require("./routes/shop");
const CartRoute = require("./routes/cart");

// Used the "body-parser" module.
App.use(BodyParser.urlencoded({extended: false}));
App.use(Express.static(Path.join(__dirname, "public")));

// Used my created modules.
App.use("/admin", AdminRoutes.router); // Can determine what segment should the paths in the module be in.
App.use(ShopRoute);
App.use(CartRoute.router);

// Added a 404 status page.
App.use(ErrorController.Get404);

// Initiated the server.
App.listen(3001, () => {
    console.log("Server is running on URL http://localhost:3001");
});
