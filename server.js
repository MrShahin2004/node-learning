"use strict";

// Imported the necessary modules.
const Path = require("path");
const Express = require("express");
const AdminRoutes = require("./routes/admin");
const ShopRoute = require("./routes/shop");
const BodyParser = require("body-parser");
const {engine} = require("express-handlebars");

// Created an app.
const App = Express();

App.engine("hbs", engine({extname: ".hbs", defaultLayout: false}));
App.set("view engine", "hbs");
App.set("views", "views");

// Used the "body-parser" module.
App.use(BodyParser.urlencoded({extended: false}));
App.use(Express.static(Path.join(__dirname, "public")));

// Used my created modules.
App.use("/admin", AdminRoutes.router); // Can determine what segment should the paths in the module be in.
App.use(ShopRoute);

// Added a 404 status page.
App.use((req, res) => {
    res.status(404).render("not-found", {pageTitle: "404 Not Found"});
});

// Initiated the server.
App.listen(3001, () => {
    console.log("Server is running on URL http://localhost:3001");
});
