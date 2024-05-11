"use strict";

const { readFile } = require("fs").promises;
const { join } = require("path");

const file = join(__dirname, "superheroes.txt");

async function readSuperheroes() {
  try {
    const data = await readFile(file, "utf-8");
    console.log(data); // print file contents
  } catch (err) {
    console.err("Error reading file:", err);
  }
}

readSuperheroes();