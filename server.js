"use strict";

// Imported the necessary modules.
const Path = require("path");
const Express = require("express");
const AdminRoutes = require("./routes/admin");
const ShopRoute = require("./routes/shop");
const BodyParser = require("body-parser");

// Created an app.
const App = Express();

// Used the "body-parser" module.
App.use(BodyParser.urlencoded({extended: false}));
App.use(Express.static(Path.join(__dirname, "public")));

// Used my created modules.
App.use("/admin", AdminRoutes.router); // Can determine what segment should the paths in the module be in.
App.use(ShopRoute);

// Added a 404 status page.
App.use((req, res) => {
    res.status(404).sendFile(Path.join(__dirname, "views", "not-found.html"));
});

// Initiated the server.
App.listen(3001);
