const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];

    // Object to hold character data
    this.newCharacter = {
      class: "",
      gender: "",
      fact: ""
    };
  }

  _write(chunk, encoding, callback) {
    const sentCharacter = chunk.toString().trim().split(",");

    if(sentCharacter.length != 3) {
      callback(new Error("Invalid or missing character data"));
      return;
    }

    // Convert character from an array of strings to an object
    this.newCharacter.class = sentCharacter[1].trim();
    this.newCharacter.gender = sentCharacter[0].trim();
    this.newCharacter.fact = sentCharacter[2].trim();

    this.queue.push(`Created a ${this.newCharacter.gender} gendered ${this.newCharacter.class} who ${this.newCharacter.fact}.`);
    callback();
  }

  _read(size) {
    if(this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;