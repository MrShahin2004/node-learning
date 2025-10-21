"use strict";

const http = require('http');

const Server = http.createServer(
    (req, res) => {
        const URL = req.url;
        if (URL === "/") {
            res.setHeader('Content-Type', 'text/html');
            res.write(`<!doctype html>`);
            res.write(`<html lang="en-US">`);
            res.write(`
            <head>
                <title>Enter Message</title>
            </head>
        `);
            res.write(`
            <body>
                <form action="/message" method="post">
                    <input type="text"/>
                    <button type="submit">Send</button>
                </form>
            </body>
        `);
            res.write(`</html>`);
            return res.end();
        }

        if (URL === "/message" && Method === "POST") {
            FS.writeFileSync("message.txt", "Dummy");
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }

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
