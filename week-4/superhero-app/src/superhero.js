/**
 * Author:      Sheldon Skaggs
 * Date:        4/12/2024
 * File Name:   superhero.js
 * Description: SuperheroEmitter class module
 */
"use strict";

const EventEmitter = require("events");

class SuperheroEmitter extends EventEmitter {
  constructor() {
    super();
  }

  performAction(action) {
    // Emit an action event
    this.emit("action", action);
  }

  helpSomeone(person) {
    // Emit a help event
    this.emit("help", person);
  }

  encounterDanger(danger) {
    // Emit a danger event
    this.emit("danger", danger);
  }
}

module.exports = SuperheroEmitter;