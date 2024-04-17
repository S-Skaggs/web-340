// process-env2.js
// Set the database username, password, and server as environment variables
process.env.DB_USERNAME = process.env.DB_USERNAME || "admin";
process.env.DB_PASSWORD = process.env.DB_PASSWORD || "s3cret";
process.env.DB_SERVER   = process.env.DB_SERVER   || "devMongoServer";

// Display the database username, password, and server
console.log(`Database username: ${process.env.DB_USERNAME}`);
console.log(`Database password: ${process.env.DB_PASSWORD}`);
console.log(`Database server: ${process.env.DB_SERVER}`);