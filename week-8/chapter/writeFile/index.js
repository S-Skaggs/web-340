"use strict";

const { writeFile } = require("fs");
const { join } = require("path");

const file = join(__dirname, "ingredients.json");

const ingredients = [
  "1 cup flour",
  "1 cup sugar",
  "4 eggs",
  "2 cups chocolate chips",
  "1 teaspoon baking soda",
  "1 teaspoon vanilla extract",
  "1 teaspoon salt",
  "1 cup brown sugar",
  "1/2 cup cocoa powder",
  "1 cup milk",
  "1 cup water"
];

const data = JSON.stringify(ingredients, null, 2);

writeFile(file, data, "utf-8", (err) => {
  if(err) {
    console.error("Error writing file:", err);
    return;
  }
});

console.log("Ingredients written to file.");