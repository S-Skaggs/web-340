/*
  Author:     Sheldon Skaggs
  Date:       5/16/2024
  File Name:  game-characters.spec.js
*/

"use strict";

const { GameCharacters } = require("../src/game-characters");

// Create test suite
describe("GameCharacters", () => {
  let gameCharacters;

  // Runs before each test
  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((characterData, error) => {
      expect(error).toBeNull();
      expect(characterData).toEqual([
        { Class: "Warrior", Gender: "Male", Perk: "Will not cut his hair" },
        { Class: "Mage", Gender: "Female", Perk: "Stutters when speaking, but not casting" },
        { Class: "Rogue", Gender: "Female", Perk: "Has heterochromia iridum as one brown eye and one green eye" }
      ]);
    });
    done();
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // Create a variable to hold the name of a fake scrip that does not exist
    let testScript = "fake-nonexisting-script.js";

    // Create a new instance of GameCharacters that uses the fake script
    const gameCharacters = new GameCharacters(testScript);

    gameCharacters.getCharacters((characterData, error) => {
      expect(characterData).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // Create a variable to reference the failing-script
    let testScript = "failing-script.js";

    // Create a new instance of GameCharacters that uses failing-script.js script
    const gameCharacters = new GameCharacters(testScript);

    gameCharacters.getCharacters((characterData, error) => {
      expect(characterData).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});