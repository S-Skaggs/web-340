"use strict";

const { readFileSync, readFile } = require("fs");
const { join } = require("path");

const file = join(__dirname, "superheroes.txt"); // __dirname is the current directory

const superheroes = readFileSync(file, "utf-8");

console.log(superheroes);