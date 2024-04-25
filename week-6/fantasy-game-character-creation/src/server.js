"use strict";

const http = require('http');
const url = require('url');

// Create character object
let newCharacter = {
  characterClass: "",
  gender: "",
  funFact: ""
};

const server = http.createServer((req, res) => {
  // Parse the URL and query parameters
  const parsedUrl = url.parse(req.url, true);
  // Get the path
  const pathname = parsedUrl.pathname;
  // Get the query parameters as an object
  const query = parsedUrl.query;

  if (pathname === "/create" && req.method === "POST"){
    // Populate newCharacter
    newCharacter.characterClass = query.class;
    newCharacter.gender = query.gender;
    newCharacter.funFact = query.funFact;

    res.writeHead(201);
    res.end(`Created a ${newCharacter.gender} ${newCharacter.characterClass} who ${newCharacter.funFact}.`);
  } else if (pathname === "/confirm" && req.method === "POST" && newCharacter.characterClass !== ""){
    // Confirm character creation
    res.writeHead(200);
    res.end("Character has been created.");
  } else if (pathname === "/confirm" && req.method === "POST" && newCharacter.characterClass === ""){
    // No character created
    res.writeHead(501);
    res.end("Character has NOT been created.");
  } else if(pathname === "/view" && req.method === "GET") {
    // View character
    res.writeHead(200);
    res.end(`Class: ${newCharacter.characterClass} Gender: ${newCharacter.gender} Fun Fact: ${newCharacter.funFact}.`);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;