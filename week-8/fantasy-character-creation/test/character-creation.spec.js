"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require('fs').promises;

// Create test suite for Character Creation Module
describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();

    // Create jest spy to mock reading a file
    jest.spyOn(fs, "readFile").mockImplementation(() => Promise.resolve("Rogue\nFemale\nHas heterochromia iridis"));

    // Create jest spy to mock writing a file
    jest.spyOn(fs, "writeFile").mockImplementation(() => Promise.resolve());

    // Set references for character creations module
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // 1. Test that createCharacter writes a new character to the file
  test("writes character data to a file", async () => {
    await expect(createCharacter(["Rogue", "Female", "Has heterochromia iridis"])).resolves.toBeUndefined();
  });

  // 2. Test that getCharacters reads characters from the file
  test("reads character data from a file", async () => {
    const characterData = await getCharacters();
    expect(characterData).toEqual(["Rogue", "Female", "Has heterochromia iridis"]);
  });

  // 3. Test that createCharacter handles errors when reading from the file
  test("handles errors when reading character data", async () => {
    fs.readFile.mockImplementationOnce(() => Promise.reject(new Error("File not found")));

    await expect(getCharacters()).rejects.toThrow("File not found");
  });
});