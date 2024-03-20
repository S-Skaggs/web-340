/**
 * Author: Sheldon Skaggs
 * Date: 3/20/2024
 * File Name: weight-converter.js
 * Description: Node.js program to convert inputted pounds to kilograms.
*/

"use strict";

// Display error and exit with a non-zero code
function HandleError(errorMessage) {
  console.error(errorMessage);
  process.exit(1);
}

// main function
function main() {
  // Check for three arguments in argv, the third would be the input pounds
  if(process.argv.length === 3) {
    let pounds = process.argv[2];
    if(isNaN(pounds)) {
      // Error, pounds is not a number
      HandleError("Input must be a number");
    } else {
      // Convert to kilograms rounded to 2 decimal places and display message
      const conversionFactor = 0.454;
      let kilograms = (pounds * conversionFactor).toFixed(2);
      console.log(kilograms);
    }
  } else {
    // Error, missing pounds
    HandleError("Usage: node weight-converter.js <pounds>");
  }
}

main(); // Run main function