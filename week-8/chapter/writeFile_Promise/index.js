"use strict";

const { writeFile } = require("fs").promises;
const { join } = require("path");

const file = join(__dirname, "villains.txt");

const villains = [
  "Joker",
  "Lex Luthor",
  "Black Adam",
  "Deathstroke",
  "Darkseid"
];

async function writeVillains() {
  try{
    await writeFile(file, villains.join("\n"));
    console.log("Villains written successfully!");
  } catch(err) {
    console.error("Error writing villains!", err);
  }
}

writeVillains();
