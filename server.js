"use strict";


let Server = HTTP.createServer((req,
                                res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<head><title>My First SSR Response</title></head>");
    res.write("<body><h1>Hello from Node.js</h1></body>")
    res.write("</html>");
    res.end();
});

Server.listen(3000);
