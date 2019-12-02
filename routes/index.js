const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const data = {
    name: 'Index',
    date: new Date().toLocaleString(),
  };

  res.render('index', data);
});

router.get('/json', (req, res, next) => {
  const data = { name: 'David', location: 'Sydney' };
  res.json(data);
});

router.get('/html', (req, res, next) => {
  const html =
    '<html><h1 style="color:red">This is an HTML response</h1></html>';
  res.send(html);
});

router.get('/query', (req, res, next) => {
  const { query } = req;
  res.json(query);
});

router.get('/params/:name/:location/:occupation', (req, res, next) => {
  const { params } = req;
  res.json(params);
});

module.exports = router;
