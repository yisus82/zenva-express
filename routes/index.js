const express = require('express');

const router = express.Router();

const profiles = [
  { name: 'Steven', city: 'Sydney', profession: 'doctor' },
  { name: 'Mark', city: 'Perth', profession: 'lawyer' },
  { name: 'Michelle', city: 'Sydney', profession: 'programmer' },
];

router.get('/', (req, res, next) => {
  const data = {
    name: 'Index',
    date: req.headers.timestamp,
    profiles,
    username: req.query.username,
  };

  res.render('index', data);
});

router.get('/login', (req, res, next) => {
  res.render('login', null);
});

router.post('/login', (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;

  if (password === '123') {
    res.redirect(`/?username=${username}`);
    return;
  }

  res.render('login', { error: 'Incorrect username and/or password.' });
});

router.post('/join', (req, res, next) => {
  const { body } = req;
  profiles.push(body);
  res.redirect('/');
});

router.get('/json', (req, res, next) => {
  const data = {
    name: 'David',
    location: 'Sydney',
    date: req.headers.timestamp,
  };
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
