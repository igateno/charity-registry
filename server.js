const express = require('express');
const Airtable = require('airtable');

const app = express();
const port = process.env.PORT || 5000;

var at = new Airtable({apiKey: 'keyhntcUzIVGNPh99'}).base('appk1Ha9JQVyPpuIc');

app.get('/api/records', (req, res) => {
    
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));