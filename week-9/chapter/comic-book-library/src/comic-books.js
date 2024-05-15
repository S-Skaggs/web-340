/*
  Author:     Sheldon Skaggs
  Date:       5/15/2024
  File Name:  comic-books.js
*/

"use strict";

const { spawn } = require("child_process");
const { join } = require("path");
const dataFile = join(__dirname, "comic-books-data.js");

class ComicBooks {
  // Use constructor to set script path
  // defaults to the dataFile
  constructor(scriptPath = dataFile) {
    this.scriptPath = scriptPath;
  }

  getComicBooks(callback) {
    const child = spawn("node", [this.scriptPath]);

    // Add listener for child's stdout
    child.stdout.on("data", (data) => {
      const comicData = JSON.parse(data.toString());
      callback(comicData, null);
    });

    // Add listener for child's stderr
    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    // Add listener for child's error
    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { ComicBooks };