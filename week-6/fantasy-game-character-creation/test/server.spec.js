"use strict";

const http = require('http');
const server = require('../src/server');

// Create test Suite
describe("server", () => {
  // After all tests close the server
  afterAll(() => {
    server.close();
  });

  // Using the done argument in a Jest test
  // Will make Jest wait until the done callback is called before finishing the test.
  test("responds to /confirm POST request no character", done => {
    // Create options object
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };

    // Create the request object
    const req = http.request(options, res => {
      // Create variable to hold response data
      let data = "";

      // Create listener for response data event
      res.on("data", chunk => {
        data += chunk;
      });

      // Create listener for response end event
      res.on("end", () => {
        expect(res.statusCode).toBe(501);
        expect(data).toBe("Character has NOT been created.");
        done();
      });
    });
    req.end();
  });

  // Using the done argument in a Jest test
  // Will make Jest wait until the done callback is called before finishing the test.
  test("responds to /create POST request with query parameter", done => {
    // Create options object
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create?class=Mage&gender=Female&funFact=stutters",
      method: "POST"
    };

    // Create the request object
    const req = http.request(options, res => {
      // Create variable to hold response data
      let data = "";

      // Create listener for response data event
      res.on("data", chunk => {
        data += chunk;
      });

      // Create listener for response end event
      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe("Created a Female Mage who stutters.");
        done();
      });
    });
    req.end();
  });

  // Using the done argument in a Jest test
  // Will make Jest wait until the done callback is called before finishing the test.
  test("responds to /confirm POST request", done => {
    // Create options object
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };

    // Create the request object
    const req = http.request(options, res => {
      // Create variable to hold response data
      let data = "";

      // Create listener for response data event
      res.on("data", chunk => {
        data += chunk;
      });

      // Create listener for response end event
      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character has been created.");
        done();
      });
    });
    req.end();
  });

  // Using the done argument in a Jest test
  // Will make Jest wait until the done callback is called before finishing the test.
  test("responds to /view GET request", done => {
    http.get("http://localhost:3000/view", res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Class: Mage Gender: Female Fun Fact: stutters.");
        done();
      });
    });
  });

});