"use strict";

// Function to determine if a superhero is from DC
function isDCSuperhero(name) {
  // string array of 25 DC superheros
  const dcSuperheros = [
    "Batman",
    "Superman",
    "Wonder Woman",
    "Aquaman",
    "Cyborg",
    "Green Lantern",
    "Flash",
    "Green Arrow",
    "Batgirl",
    "Robin",
    "Hawkman",
    "Hawkgirl",
    "Zatanna",
    "Supergirl",
    "Shazam",
    "Black Canary",
    "Catwoman",
    "Constantine",
    "Power Girl",
    "Nightwing",
    "Raven",
    "Starfire",
    "Beast Boy",
    "Doctor Fate",
    "Red Hood"
  ];

  if(dcSuperheros.includes(name)) {
    console.log(`${name} is from DC Comics!`);
  } else {
    console.log(`${name} is not from DC Comics!`);
    process.exit(1);
  }
}

module.exports = { isDCSuperhero };