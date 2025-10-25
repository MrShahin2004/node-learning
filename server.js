"use strict";

const HTTP = require("http");
const Routes = require("./routes");

const Server = HTTP.createServer(Routes);

Server.listen(3001);
