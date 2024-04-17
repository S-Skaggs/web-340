// process-env.js
// Set the environment
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// To change the environment in the command prompt use
// set NODE_ENV=DesiredMode
// where DesiredMode is the mode you wish to use
// you can also just leave it blank to assign nothing

// Display a message based on the environment
if(process.env.NODE_ENV === "development") {
  console.log("Running in development mode");
} else if(process.env.NODE_ENV === "production") {
  console.log("Running in production mode");
} else {
  console.log(`Running in ${process.env.NODE_ENV} mode`);
}