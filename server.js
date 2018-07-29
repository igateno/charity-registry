const express = require('express');
const Airtable = require('airtable');

const app = express();
const port = process.env.PORT || 5000;

var at = new Airtable({apiKey: 'keyhntcUzIVGNPh99'}).base('appqpCTfoETGuzN7O');

app.get('/api/items', (req, res) => {
    var items = [];
    at('Items').select({}).eachPage(
        function page(records, fetchNextPage) {
            records.forEach(function(record) {
                items.push(record._rawJson);
            });
            fetchNextPage();
        },
        function done(err) {
            res.setHeader('Content-Type', 'application/json');

            if (err) {
                res.status(500);
                res.send(JSON.stringify({ success: false, error: err.toString() }));
            } else {
                res.status(200);
                res.send(JSON.stringify({ success: true, items: items }));
            }
        }
    )
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));