"use strict";

const { JokesStream } = require ("../src/jokes-streamer");

describe ("JokesStream", () => {
  // Output Jokes correctly
  test("should output jokes correctly", (done) => {
    const jokes = [
      "What do you calla fake noodle? An impasta!",
      "What do you call a bear with no teeth? A gummy bear!",
      "Why don't scientists trust atoms? Because they make up everything!"
    ];

    const jokesStream = new JokesStream(jokes.slice().reverse());

    let output = "";
    jokesStream.on("data", (chunk) => {
      output += chunk;
    });

    jokesStream.on("end", () => {
      expect(output).toBe(jokes.join("\n") + "\n");
      done();
    });
  });
});