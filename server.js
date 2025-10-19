"use strict";

const HTTP = require('http');

let Server = HTTP.createServer((req,
                                res) => {
    console.log("HTTP server started!");
});

Server.listen(3000);
