/**
 * Author:      Sheldon Skaggs
 * Date:        4/12/2024
 * File Name:   superhero.spec.js
 * Description: Tests to run against the SuperheroEmitter module
 */
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();

function testPerformAction() {
  // Declare variables to use in asserts
  let expectedResult = "fly";
  let actualResult = "";

  try {
    // Create event listener and set actual result
    superhero.on("action", (action) => {
      actualResult = action;
    });

    // Call event
    superhero.performAction("fly");

    assert.strictEqual(actualResult, expectedResult, `Expected action ${expectedResult}, actual action: ${actualResult}`);

    console.log("Passed testPerformAction");
    return true;
  } catch(err) {
    console.error(`Failed testPerformAction: ${err}`);
    return false;
  }
}

function testHelpSomeone() {
  // Declare variables to use in asserts
  let expectedResult = "Mary Jane";
  let actualResult = "";

  try {
    // Create event listener and set actual result
    superhero.on("help", (person) => {
      actualResult = person;
    });

    // Call event
    superhero.helpSomeone("Mary Jane");

    assert.strictEqual(actualResult, expectedResult, `Expected person ${expectedResult}, actual person: ${actualResult}`);

    console.log("Passed testHelpSomeone");
    return true;
  } catch(err) {
    console.error(`Failed testHelpSomeone: ${err}`);
    return false;
  }
}

function testEncounterDanger() {
  // Declare variables to use in asserts
  let expectedResult = "flooding";
  let actualResult = "";

  try {
    // Create event listener and set actual result
    superhero.on("danger", (danger) => {
      actualResult = danger;
    });

    // Call event
    superhero.encounterDanger("flooding");

    assert.strictEqual(actualResult, expectedResult, `Expected danger ${expectedResult}, actual danger: ${actualResult}`);

    console.log("Passed testEncounterDanger");
    return true;
  } catch(err) {
    console.error(`Failed testEncounterDanger: ${err}`);
    return false;
  }
}

testPerformAction();
testHelpSomeone();
testEncounterDanger();