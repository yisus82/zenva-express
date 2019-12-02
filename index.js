const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use('/', routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000);
console.log('Server running on http://localhost:5000');
