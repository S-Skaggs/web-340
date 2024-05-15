/*
  Author:     Sheldon Skaggs
  Date:       5/15/2024
  File Name:  answer-checker.js
*/

"use strict";

const { VideoGame } = require("../src/video-game");
const child_process = require("child_process");
const { spawn } = child_process;

// Create a mock of the child_process
jest.mock("child_process");

// Create a test suite
describe("Video Game", () => {
  let videoGame;

  // Run before each test
  beforeEach(() => {
    videoGame = new VideoGame();
    spawn.mockClear();
  });

  test("should correctly send the command to the video game", (done) => {
    const mockChild = {
      stdout:{ on: jest.fn((event, callback) => callback(JSON.stringify({ state: "Game started" }))) },
      on: jest.fn(),
      send: jest.fn(),
    };
    spawn.mockReturnValueOnce(mockChild);

    videoGame.sendCommand("start", (state) => {
      expect(state).toBe("Game started");
      done();
    });
  });

  test("should handle an error when the video game is not available", () => {
    spawn.mockImplementationOnce(() => {
      throw new Error("Video game not found");
    });

    expect(() => videoGame.sendCommand("start")).toThrow("Video game not found");
  });

  test("should handle an unknown command", (done) => {
    const mockChild = {
      stdout: { on: jest.fn((event, callback) => callback(JSON.stringify({ state: "Unknown command" })))},
      on: jest.fn(),
      send: jest.fn(),
    };
    spawn.mockReturnValueOnce(mockChild);

    videoGame.sendCommand("unknown", (state) => {
      expect(state).toBe("Unknown command");
      done();
    });
  });
});