"use strict";

const http = require('http');

const Server = http.createServer(
    (req, res) => {
        console.log(req.url, req.method, req.headers);
        // process.exit();
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!doctype html>`);
        res.write(`<html lang="en-US">`);
        res.write(`
            <head>
                <title>My First Page</title>
            </head>
        `);
        res.write(`
            <body>
                <h1>Hello from my Node.js Server!</h1>
            </body>
        `);
        res.write(`</html>`);
        res.end();
    });

Server.listen(3000);
