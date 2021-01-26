const fs = require('fs');
const colors = require('colors');

const jsonString = {
  name: 'Zac',
};

fs.writeFile('./data2.json', JSON.stringify(jsonString), (err) => {
  if (err) {
    console.error('There was an error!'.yellow.bold);
    console.error('Error:'.red, err);
    return;
  }
  const data2 = require(`./data2.json`);
  console.log('Name:'.green, data2.name);
  return;
});
