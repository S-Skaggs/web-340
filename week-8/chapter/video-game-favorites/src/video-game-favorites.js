"use strict";

const { readFile, writeFile } = require("fs").promises;
const { join } = require("path");

const GAMES_File = join(__dirname, "games.txt");
const RATINGS_FILE = join(__dirname, "ratings.txt");

async function readFavoriteGames() {
  try {
    const data = await readFile(GAMES_File, "utf-8");
    const games = data.split("\n").filter(game => game);
    return games;
  } catch(err) {
    throw err;
  }
}

async function writePlayerRatings(ratings) {
  try {
    const data = ratings.join("\n");
    await writeFile(RATINGS_FILE, data);
  } catch(err) {
    throw err;
  }
}

module.exports = { readFavoriteGames, writePlayerRatings };