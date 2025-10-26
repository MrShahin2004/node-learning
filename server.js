"use strict";

const Express = require("express");

const App = Express();
App.use((req,res,next)=>{
    res.send(`
        <h1>Hey, talking to you from Express.js!</h1>
    `);
});

App.listen(3001);
