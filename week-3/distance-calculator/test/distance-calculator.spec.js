const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), "0.52 AU");
    console.log("testEarthToMars - PASSED!");
    return true;
  } catch(err) {
    console.error(`Failed testEarthToMars: ${err.message}`);
    return false;
  }
}

function testPlanet1NotAPlanet() {
  try {
    assert.strictEqual(calculateDistance("foo", "Earth"), -1);
    throw new Error("Failed to detect invalid planet name!");
  } catch(err) {
    if(err.Name = "RangeError" && err.message === "Planet1 must be a valid planet name from our solar system.") {
      console.log("testPlanet1NotAPlanet - PASSED!");
      return true;
    }
    console.error(`Failed testPlanet1NotAPlanet: ${err.message}`);
    return false;
  }
}

function testPlanet2NotAPlanet() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Foo"), -1);
    throw new Error("Failed to detect invalid planet name!");
  } catch(err) {
    if(err.Name = "RangeError" && err.message === "Planet2 must be a valid planet name from our solar system.") {
      console.log("testPlanet2NotAPlanet - PASSED!");
      return true;
    }
    console.error(`Failed testPlanet2NotAPlanet: ${err.message}`);
    return false;
  }
}

function testMercuryToNeptune() {
  try {
    assert.strictEqual(calculateDistance("Mercury", "Neptune"), "29.67 AU");
    console.log("testMercuryToNeptune - PASSED!");
    return true;
  } catch(err) {
    console.error(`Failed testMercuryToNeptune: ${err.message}`);
    return false;
  }
}

// Call your test functions here
testEarthToMars();
testPlanet1NotAPlanet();
testPlanet2NotAPlanet();
testMercuryToNeptune();