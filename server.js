"use strict";

// Imported the necessary modules.
const Path = require("path");
const Express = require("express");
const BodyParser = require("body-parser");
const Page404 = require("./controllers/page-404");

// Created an app.
const App = Express();

App.set("view engine", "ejs");
App.set("views", "views");

const AdminRoutes = require("./routes/admin");
const ShopRoute = require("./routes/shop");

// Used the "body-parser" module.
App.use(BodyParser.urlencoded({extended: false}));
App.use(Express.static(Path.join(__dirname, "public")));

// Used my created modules.
App.use("/admin", AdminRoutes.router); // Can determine what segment should the paths in the module be in.
App.use(ShopRoute);

// Added a 404 status page.
App.use(Page404.NotFoundPage);

// Initiated the server.
App.listen(3001, () => {
    console.log("Server is running on URL http://localhost:3001");
});
