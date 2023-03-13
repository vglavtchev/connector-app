const express = require('express');
const app = express();
const path = require('path');

app.post('/submit', (req, res) => {
  res.send('Hello - this is server!');
});

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
