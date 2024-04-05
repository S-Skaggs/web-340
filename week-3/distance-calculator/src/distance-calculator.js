function calculateDistance(planet1, planet2) {
  // Declare an associative array to hold planet distances from the sun based on
  // https://www.jpl.nasa.gov/edu/pdfs/scaless_reference.pdf
  let distanceFromSun = {
    "Mercury": 0.39,
    "Venus": 0.72,
    "Earth": 1,
    "Mars": 1.52,
    "Jupiter": 5.2,
    "Saturn": 9.54,
    "Uranus": 19.2,
    "Neptune": 30.06
  };

  // Test that both planets are in the array
  if(planet1 in distanceFromSun === false) {
    throw new RangeError("Planet1 must be a valid planet name from our solar system.");
  }

  if(planet2 in distanceFromSun === false) {
    throw new RangeError("Planet2 must be a valid planet name from our solar system.");
  }

  // Calculate planet distances by finding the difference of their distances to the sun
  // Use Math's absolute value function to accommodate any planet order.
  // Fix the result to two decimal places
  return Math.abs(distanceFromSun[planet1] - distanceFromSun[planet2]).toFixed(2) + " AU";
}

module.exports = calculateDistance;