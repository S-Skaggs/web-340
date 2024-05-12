"use strict";

const fs = require("fs").promises;

// Create test suite
describe("Video Game Favorites", () => {
  let readFavoriteGames;
  let writePlayerRatings;

  // Run before each test
  beforeEach(() => {
    jest.resetModules();

    // Create jest spy to mock reading a file
    jest.spyOn(fs, "readFile").mockImplementation(() => Promise.resolve("Game 1\nGame 2\nGame 3\n"));

    // Create jest spy to mock writing a file
    jest.spyOn(fs, "writeFile").mockImplementation(() => Promise.resolve());

    // Set references of readFavoriteGames and writePlayerRatings to video-game-favorites.js
    ({readFavoriteGames, writePlayerRatings} = require("../src/video-game-favorites"));
  });

  test("reads favorite games from a file", async () => {
    const games = await readFavoriteGames();
    expect(games).toEqual(["Game 1", "Game 2", "Game 3"]);
  });

  test("writes player ratings to a file", async () => {
    await expect(writePlayerRatings(["Rating 1", "Rating 2", "Rating 3"])).resolves.toBeUndefined();
  });

  test("handles errors when reading favorite games", async () => {
    fs.readFile.mockImplementationOnce(() => Promise.reject(new Error("File not found")));

    await expect(readFavoriteGames()).rejects.toThrow("File not found");
  });
});
