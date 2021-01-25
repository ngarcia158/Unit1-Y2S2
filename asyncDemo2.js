// Imports
const fs = require("fs");

// Grab all the files in the base directory of the hard drive
fs.readdir("/", (err, data) => {
  // Check for errors prior to executing and aborts if found
  if (err) {
    console.log(`Request failed with error:`, err);
    return;
  }
  // Output file/dir list to console
  console.log("data:", data);
});

console.log(`This code finishes first!`);
