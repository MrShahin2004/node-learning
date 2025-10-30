"use strict";

const Path = require("path");
const Express = require('express');
const Router = Express.Router();
const RootDir = require("../utils/path");
const AdminData = require("./admin");

Router.get("/", (req, res) => {
    res.sendFile(Path.join(RootDir, "views", "shop.html"));
});

module.exports = Router;
