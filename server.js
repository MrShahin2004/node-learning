"use strict";

const HTTP = require("http");

const Server = HTTP.createServer(
    (req, res) => {
        const URL = req.url;
        const Method = req.method;
    });

Server.listen(3001);
