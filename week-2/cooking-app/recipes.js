/**
 * Author: Sheldon Skaggs
 * Date: 3/28/2024
 * File Name: recipes.js
 * Description: Javascript file to be used for recipe related functions
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // Declare variable to hold formatted string to return
  let neededIngredients = "Recipe created with ingredients: ";

  // Add ingredient list to the neededIngredients string
  for(let ingredient of ingredients) {
    neededIngredients += `${ingredient}, `;
  }

  return neededIngredients.slice(0, -2);
}

// Define the setTimer function
function setTimer(minutes) {
  // Return instructions for timer
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  // Confirm quitting program
  return "Program exited";
}

// Export functions for recipes module
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit
};