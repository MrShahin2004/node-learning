"use strict";

const HTTP = require("http");
const FS = require("fs");

const Server = HTTP.createServer(
    (req, res) => {
        const URL = req.url;
        const Method = req.method;
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
                    <input type="text" name="message"/>
                    <button type="submit">Send</button>
                </form>
            </body>
        `);
            res.write(`</html>`);
            return res.end();
        }

        if (URL === "/message" && Method === "POST") {
            let Body = [];
            req.on("data", (chunk) => {
                console.log(chunk);
                Body.push(chunk);
            });
            req.on("end", () => {
                let ParsedBody = Buffer.concat(Body).toString();
                let Message = ParsedBody.split("=")[1];
                FS.writeFileSync("message.txt", Message);
            });
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
