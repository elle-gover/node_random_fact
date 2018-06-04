"use strict";
const http = require("http");
const facts = require("./facts");




http.createServer((request, response) => {
    console.log("the server is running on Port3000.");
    response.writeHead(200, {"Content-type": "text/plain" });
    response.write(facts())
    response.end();
}).listen(3000);