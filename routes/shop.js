"use strict";

const Path = require("path");
const Express = require('express');
const Router = Express.Router();

Router.get("/",
    (req, res, next) => {
        res.send(`
        <h1>Hey, this is Express.js!</h1>
    `);
    });

module.exports = Router;
