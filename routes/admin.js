"use strict";

const Express = require("express");
const Router = Express.Router();

Router.get("/add-product",
    (req, res, next) => {
        res.send(`
        <form action="/admin/add-product" method="post">
            <input name="title" type="text">
            <button type="submit">Add Product</button>
        </form>
    `);
    });

Router.post("/add-product",
    (req, res, next) => {
        console.log(req.body);
        res.redirect("/");
    });

module.exports = Router;
