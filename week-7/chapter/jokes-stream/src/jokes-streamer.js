"use strict";

const { Readable } = require("stream");

class JokesStream extends Readable {
  constructor(jokes, options) {
    super(options);
    this.jokes = jokes;
  }

  _read() {
    if(this.jokes.length  === 0) {
      this.push(null);
    } else {
      this.push(this.jokes.pop() + "\n");
    }
  }
}

module.exports = { JokesStream };