/*
  Author:     Sheldon Skaggs
  Date:       5/16/2024
  File Name:  game-characters-data.js
*/

"use strict";

// Create an array of characters
const gameCharacters = [
  { Class: "Warrior", Gender: "Male", Perk: "Will not cut his hair" },
  { Class: "Mage", Gender: "Female", Perk: "Stutters when speaking, but not casting" },
  { Class: "Rogue", Gender: "Female", Perk: "Has heterochromia iridum as one brown eye and one green eye" }
];

// Console log the gameCharacters array for verification
console.log(JSON.stringify(gameCharacters));