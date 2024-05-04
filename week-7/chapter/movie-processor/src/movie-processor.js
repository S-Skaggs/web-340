// movie-processor.js
"use strict";

const { Duplex } = require("stream");

class MovieProcessor extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    const movie = chunk.toString().trim();
    if(!movie) {
      callback(new Error("Invalid data"));
      return;
    }

    this.queue.push(`The movie is titled "${movie}".`);
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

module.exports = { MovieProcessor };