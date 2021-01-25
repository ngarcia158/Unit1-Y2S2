// Imports
const fs = require("fs");

// Grab all the files in the base directory of the hard drive
fs.readdir("/", phoneNumber);

function phoneNumber(err, data) {
  // Checks for errors and aborts if it finds any
  if (err) {
    console.log(`Request failed with error:`, err);
    return;
  }
  // Output file/dir list to console
  console.log("data:", data);
}

console.log(`This code finishes first!`);
