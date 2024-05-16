/*
  Author:     Sheldon Skaggs
  Date:       5/16/2024
  File Name:  game-characters.js
*/

"use strict";

const { spawn } = require("child_process");
const { join } = require("path");
const characterDataFile = "game-characters-data.js";

class GameCharacters {
  // Constructor takes optional parameter to specify
  // a different file for character data
  constructor(characterDataSource = characterDataFile) {
    this.characterDataSource = join(__dirname, characterDataSource);
  }

  getCharacters(callback) {
    // Spawn a child process to get the character data
    const child = spawn("node", [this.characterDataSource]);

    // Add a listener for the child's stdout
    child.stdout.on("data", (data) => {
      const characterData = JSON.parse(data.toString());
      callback(characterData, null);
    });

    // Add a listener for the child's stderr
    child.stderr.on("data", (errData) => {
      console.error(`stderr: ${errData}`);
      callback(null, new Error(errData.toString()));
    });

    // Add a listener for the child's error
    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };