/*
  Author:     Sheldon Skaggs
  Date:       5/15/2024
  File Name:  trivia-game.spec.js
*/
"use strict";

const { stdout } = require("process");
const { TriviaGame } = require("../src/trivia-game");
const child_process = require("child_process");
const { spawnSync } = child_process;

jest.mock("child_process");

// Create test suite
describe("Trivia Game", () => {
  let triviaGame;

  // Run before each test
  beforeEach(() => {
    triviaGame = new TriviaGame();
    spawnSync.mockClear();
  });

  test("should correctly answer trivia question", () => {
    const mockChild = { stdout:Buffer.from("Correct"), error: null };
    spawnSync.mockReturnValueOnce(mockChild);
    const result = triviaGame.answerQuestion("What is Node.js?", "JavaScript runtime");
    expect(result).toBe(true);
  });

  test("should incorrectly answer trivia question", () => {
    const mockChild = { stdout:Buffer.from("Incorrect"), error: null };
    spawnSync.mockReturnValueOnce(mockChild);
    const result = triviaGame.answerQuestion("What is Node.js?", "A programming language");
    expect(result).toBe(false);
  });

  test("should handle error when trivia game is not available", () => {
    spawnSync.mockImplementationOnce(() => {
      throw new Error("Trivia game not found");
    });

    expect(() => triviaGame.answerQuestion("What is Node.js?", "JavaScript runtime")).toThrow("Trivia game not found");
  });
});