// Imports
const fs = require("fs");

// Grab all the files in the base directory of the hard drive
let data = fs.readdirSync("/");
console.log("data:", data); // Output file/dir list to console

console.log(`This code runs last!`);
