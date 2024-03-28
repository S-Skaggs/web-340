/**
 * Author: Sheldon Skaggs
 * Date: 3/28/2024
 * File Name: index.js
 * Description:
*/

// TODO: Import your module using require
const {createRecipe, setTimer, quit} = require("./recipes.js");

// TODO: Implement your CLI program here
function main() {
  let ingredientList = ["1 can of pumpkin", "1 can of Sweetened Condensed Milk", "2 Large Eggs", "1 tsp Ground Cinnamon", ".5 tsp Ground Ginger", ".5 tsp Ground Nutmeg", ".5 tsp Salt", "1 Unbaked Deep Dish Frozen Pie Crust (9 inch)"];
  let tMinutes = 40;

  console.log(createRecipe(ingredientList));
  console.log("");
  console.log(setTimer(tMinutes));
  console.log("");
  console.log(quit());
}

main();