"use strict";

const http = require("http");
const server = require("../src/server");

// Test Suite
describe("Server", () => {

  // Run after all tests
  afterAll(() => {
    // Close the server after all tests have run
    server.close();
  });

  // Create a test that uses the done argument.
  // Jest will wait until the done callback is called before finishing the test.
  test("responds to /order POST request with query parameter", done => {
    // Create options object
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/order?item=pizza",
      method: "POST"
    };

    // Create request object
    const req = http.request(options, res => {
      // Create variable to hold the data
      let data = "";

      // Create listener for the response data event
      res.on("data", chunk => {
        data += chunk;
      });

      // Create listener for the response end event
      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe("Order for pizza has been placed.");
        done();
      });
    });
    req.end();
  });

  test("responds to /checkout GET request", done => {
    http.get("http://localhost:3000/checkout", res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Checkout page.");
        done();
      });
    });
  });

  test("responds to /confirm POST request", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };

    const req = http.request(options, res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Order has been confirmed.");
        done();
      });
    });
    req.end();
  });
});