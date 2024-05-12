"use strict";

//const { writeFile } = require('fs');

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:
const fs = require('fs').promises;
const { join } = require("path");

// Create variable for path and file name of character sheet
const CHARACTER_SHEET = join(__dirname, "character.txt");

async function createCharacter(character) {
  try {
    // Character data should be an array of strings
    const data = character.join("\n");

    // Write character data to file
    await fs.writeFile(CHARACTER_SHEET, data, "utf-8");

    // Log success
    console.log("Character created.");
  } catch(err) {
    throw(err);
  }
}

async function getCharacters() {
  try {
    // Read character data from CHARACTER_SHEET
    const data = await fs.readFile(CHARACTER_SHEET, "utf-8");

    // Convert data into an array, splitting on the newline
    const characterSheet = data.split("\n").filter(characterAttribute => characterAttribute);

    return characterSheet;
  } catch(err) {
    throw err;
  }
}

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises