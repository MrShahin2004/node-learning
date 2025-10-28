"use strict";

const Path = require("path");
const Express = require('express');
const Router = Express.Router();

Router.get("/", (req, res) => {
    res.sendFile(Path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = Router;
