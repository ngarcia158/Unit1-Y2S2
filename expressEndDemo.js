// Define needed info
const express = require('express');
const app = express();
const port = 8080;

// Open server port
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});

// Send content to the server (__dirname specifies an index.html in root if found)
app.use('/users', (req, res) => {
  console.log('User requested an endpoint');
});
