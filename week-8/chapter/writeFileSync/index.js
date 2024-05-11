"use strict";

const { writeFileSync } = require("fs");
const { join } = require("path");

const file = "superheros.json";

const superheros = [
  "Superman",
  "Batman",
  "Wonder Woman",
  "Flash",
  "Green Lantern",
  "Aquaman"
];

const data = JSON.stringify(superheros, null, 2);

writeFileSync(file, data, "utf-8");

console.log("Superheroes written to file.");