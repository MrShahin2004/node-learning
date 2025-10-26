"use strict";

const HTTP = require("http");
const Express = require("express");

const App = Express();

const Server = HTTP.createServer(App);

Server.listen(3001);
