"use strict";

const Path = require("path");
const Express = require("express");
const Router = Express.Router();

Router.get("/add-product",
    (req, res) => {
        res.sendFile(Path.join(__dirname, "..", "views", "add-product.html"));
    });

Router.post("/add-product",
    (req, res, next) => {
        console.log(req.body);
        res.redirect("/");
    });

module.exports = Router;
