/**
 * Author:      Sheldon Skaggs
 * Date:        4/12/2024
 * File Name:   index.js
 * Description: Run the Superhero application
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up event listeners for the superhero object
superhero.on("action", (action) => {
  console.log(`Superhero performs action: ${action}`);
});

superhero.on("help", (person) => {
  console.log(`Superhero helps: ${person}`);
});

superhero.on("danger", (danger) => {
  console.log(`Superhero encounters danger: ${danger}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // Create a variable to hold the arguments as a single string
  let theSubject = "";
  for(let item of args) {
    theSubject += item + " ";
  }
  theSubject = theSubject.trim();

  // Handle the commands
  switch(command) {
    case "action":
      superhero.performAction(theSubject);
      break;
    case "danger":
      superhero.encounterDanger(theSubject);
      break;
    case "help":
      superhero.helpSomeone(theSubject);
      break;
    default:
      console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);
      break;
  }
});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);