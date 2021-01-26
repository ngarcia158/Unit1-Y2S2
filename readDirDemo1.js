const fs = require('fs');
const colors = require('colors');

fs.readdir('c:/', (err, data) => {
  if (err) {
    console.error('There was an error!'.yellow);
    console.error('Error:'.red, err);
    return;
  }
  console.log('Data:'.blue, data);
  return;
});
