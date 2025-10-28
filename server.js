"use strict";

const Express = require("express");
const BodyParser = require("body-parser");

const App = Express();
App.use(BodyParser.urlencoded({extended: false}));

App.get("/add-product",
    (req, res, next) => {
        res.send(`
        <form action="/product" method="post">
            <input name="title" type="text">
            <button type="submit">Add Product</button>
        </form>
    `);
    });

App.post("/product",
    (req, res, next) => {
        console.log(req.body);
        res.redirect("/");
    });

App.get("/",
    (req, res, next) => {
        res.send(`
        <h1>Hey, this is Express.js!</h1>
    `);
    });

App.listen(3001);
