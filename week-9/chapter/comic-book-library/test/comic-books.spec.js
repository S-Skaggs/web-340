/*
  Author:     Sheldon Skaggs
  Date:       5/15/2024
  File Name:  comic-books.spec.js
*/

"use strict";

const { ComicBooks } = require("../src/comic-books");

// Create test suite
describe("ComicBooks", () => {
  let comicBooks;

  // Run before each test
  beforeEach(() => {
    comicBooks = new ComicBooks();
  });

  test("should return comic books data", (done) => {
    comicBooks.getComicBooks((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { Name: "The Dark Knight Returns", Publisher: "DC Comics", Superhero: "Batman", Villain: "The Joker" },
        { Name: "The Death of Superman", Publisher: "DC Comics", Superhero: "Superman", Villain: "Doomsday" }
      ]);
      done();
    });
  });

  test("should handle an error when the comic books data script is not found", (done) => {
    const comicBooks = new ComicBooks("nonexistent-script.js");
    comicBooks.getComicBooks((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the comic books data script fails", (done) => {
    const comicBooks = new ComicBooks("failing-script.js");
    comicBooks.getComicBooks((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});