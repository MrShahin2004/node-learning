"use strict";

const Path = require("path");
const Express = require("express");
const RootDir = require("../utils/path");
const Router = Express.Router();

Router.get("/add-product",
    (req, res) => {
        res.sendFile(Path.join(RootDir, "views", "add-product.html"));
    });

Router.post("/add-product",
    (req, res, next) => {
        console.log(req.body);
        res.redirect("/");
    });

module.exports = Router;
