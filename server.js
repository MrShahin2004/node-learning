"use strict";

const Express = require("express");
const AdminRoutes = require("./routes/admin");
const BodyParser = require("body-parser");

const App = Express();
App.use(BodyParser.urlencoded({extended: false}));
App.use(AdminRoutes);

App.get("/",
    (req, res, next) => {
        res.send(`
        <h1>Hey, this is Express.js!</h1>
    `);
    });

App.listen(3001);
