"use strict";

const http = require("http");
const url = require("url");

// Crate server object
const server = http.createServer((req, res) => {
  // Parse the URL and query parameters
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  const pathname = parsedUrl.pathname;

  // Get the query parameters as an object
  const query = parsedUrl.query;

  if (pathname === "/order" && req.method === "POST"){
    // You can now access query parameters with query.parameterName
    const item = query.item;
    res.writeHead(201);
    res.end(`Order for ${item} has been placed.`);
  } else if (pathname === "/checkout" && req.method === "GET"){
    res.writeHead(200);
    res.end("Checkout page.");
  } else if (pathname === "/confirm" && req.method === "POST"){
    res.writeHead(200);
    res.end("Order has been confirmed.");
  } else {
    res.writeHead(404);
    res.end();
  }
});

// Start the server
server.listen(3000);

module.exports = server;