// Imports
const fs = require("fs");

let data = fs.readdirSync("/");
console.log("data:", data);

console.log(`this code runs last`);
