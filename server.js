"use strict";

const HTTP = require('http');

let Server = HTTP.createServer((req,
                                res) => {
    console.log(req.url, req.method, req.headers);
});

Server.listen(3000);
