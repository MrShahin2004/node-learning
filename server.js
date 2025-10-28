"use strict";

// Imported the necessary modules.
const Express = require("express");
const AdminRoutes = require("./routes/admin");
const ShopRoute = require("./routes/shop");
const BodyParser = require("body-parser");

// Created an app.
const App = Express();

// Used the "body-parser" module.
App.use(BodyParser.urlencoded({extended: false}));

// Used my created modules.
App.use(AdminRoutes);
App.use(ShopRoute);

// Added a 404 status page.
App.use((req, res, next) => {
    res.status(404).send(`<h1>Page Not Found</h1>`);
});

// Initiated the server.
App.listen(3001);
