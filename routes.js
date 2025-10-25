"use strict";

const FS = require("fs");

const HandleRequest = (req, res) => {
    let URL = req.url;
    let Method = req.method;

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
                        <input name="message" type="text"/>
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
        return req.on("end", () => {
            let ParsedBody = Buffer.concat(Body).toString();
            let Message = ParsedBody.split("=")[1];
            FS.writeFile("message.txt", Message, (error) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
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
}
