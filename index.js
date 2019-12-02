const express = require('express');

const app = express();
app.get('/', (req, res, next) => {
  res.send('My First Express App!');
});

app.get('/json', (req, res, next) => {
  const data = { name: 'David', location: 'Sydney' };
  res.json(data);
});

app.get('/html', (req, res, next) => {
  const html =
    '<html><h1 style="color:red">This is an HTML response</h1></html>';
  res.send(html);
});

app.get('/query', (req, res, next) => {
  const { query } = req;
  res.json(query);
});

app.get('/params/:name/:location/:occupation', (req, res, next) => {
  const { params } = req;
  res.json(params);
});

app.listen(5000);
console.log('Server running on http://localhost:5000');
