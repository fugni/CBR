const express = require('express');
const app = express();
const port = 3000;

var queries = require('./scripts/queries.js');

app.get('/', (req, res) => {
    res.json( queries.getAll() );
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});