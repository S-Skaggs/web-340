/**
 * Author: Sheldon Skaggs
 * Date: 4/19/2024
 * File Name: pie.spec.js
 * Description: Test suite for the pie-baker
 */

"use strict";

const pieBaker = require("../src/pie");

// Test suite for bakePie
describe("pieBaker", () => {
  let log;
  let exit;

  // Runs before each test
  beforeEach(() => {
    // Spy on the console's log method
    log = jest.spyOn(console, "log");

    // Spy on the exit process to prevent the test from exiting.
    exit = jest.spyOn(process, "exit").mockImplementation((code) => code);
  });

  // Runs after each test
  afterEach(() => {
    // Restore the spies created with spyOn
    log.mockRestore();
    exit.mockRestore();
  })

  test("successfully baked pie", () => {
    let pieIngredients = ["flour", "sugar", "butter"];
    let pieName = "myFakePie";

    pieBaker.bakePie(pieName, pieIngredients);
    expect(log).toHaveBeenCalledWith("success");
    expect(exit).not.toHaveBeenCalled();
  });

  test("pie not baked", () => {
    let pieIngredients = ["flour", "sugar"];
    let pieName = "myFakePie";

    pieBaker.bakePie(pieName, pieIngredients);
    expect(log).toHaveBeenCalledWith("unsuccessful");
    expect(exit).toHaveBeenCalledWith(1);
  });

  test("successfully baked pie ignoring ingredient case", () => {
    let pieIngredients = ["Flour", "sUgar", "buTTer"];
    let pieName = "myFakePie";

    pieBaker.bakePie(pieName, pieIngredients);
    expect(log).toHaveBeenCalledWith("success");
    expect(exit).not.toHaveBeenCalled();
  });

  test("successfully baked pie with extra ingredients", () => {
    let pieIngredients = ["Flour", "sUgar", "buTTer", "1 can of pumpkin", "1 can, 14oz, sweetened condensed milk", "2 large eggs", "1 tsp ground cinnamon", "1/2 tsp ground ginger", "1/2 tsp ground nutmeg", "1/2 tsp salt"];
    let pieName = "myFakePie";

    pieBaker.bakePie(pieName, pieIngredients);
    expect(log).toHaveBeenCalledWith("success");
    expect(exit).not.toHaveBeenCalled();
  });
});