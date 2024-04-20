/**
 * Author: Sheldon Skaggs
 * Date: 4/19/2024
 * File Name: pie.js
 * Description: File for the bakPie module
 */
"use strict";

function bakePie(pieType, ingredients) {
  let hasEssential = true;
  let essentials = [
    "flour",
    "sugar",
    "butter"
  ];

  // Convert ingredients input to lowercase
  let lcIngredients = ingredients.map(i => i.toLowerCase());

  for(let ingredient of essentials) {
    if(!lcIngredients.includes(ingredient)) {
      hasEssential = false;
    }
  }

  if(hasEssential) {
    console.log("success");
  } else {
    console.log("unsuccessful");
    process.exit(1);
  }
}

module.exports = { bakePie };