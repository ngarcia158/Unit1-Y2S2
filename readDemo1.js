const fs = require('fs');
const colors = require('colors');

fs.readFile(`./data1.json`, (err, data) => {
  if (err) {
    console.error('There was an error!'.yellow);
    console.error('Error:'.red, err);
    return;
  }
  const myData = JSON.parse(data);
  console.log('Data:'.blue, myData);
  console.log('Name:'.green, myData.name);
  return;
});
