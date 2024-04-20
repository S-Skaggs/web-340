"use strict";

const superhero = require("../src/superhero.js");

// this is used for mocking process.exit calls in the isDcSuperhero function
// it is needed to prevent the test from exiting prematurely and failing
const exit = jest.spyOn(process, "exit").mockImplementation((code) => code);

// Create a test suite
describe("isDCSuperhero", () => {
  let log;

  // Runs before each test
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });

  // Runs after each test
  afterEach(() => {
    log.mockRestore();
  });

  test("identifies a DC superhero", () => {
    superhero.isDCSuperhero("Batman");
    expect(log).toHaveBeenCalledWith("Batman is from DC Comics!");
    expect(exit).not.toHaveBeenCalled();
  });

  test("identifies a non-DC superhero", () => {
    superhero.isDCSuperhero("Spiderman");
    expect(log).toHaveBeenCalledWith("Spiderman is not from DC Comics!");
    expect(exit).toHaveBeenCalledWith(1);
  });
});