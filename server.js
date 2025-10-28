"use strict";

const Express = require("express");
const AdminRoutes = require("./routes/admin");
const ShopRoute = require("./routes/shop");
const BodyParser = require("body-parser");

const App = Express();
App.use(BodyParser.urlencoded({extended: false}));
App.use(AdminRoutes);
App.use(ShopRoute);

App.listen(3001);
