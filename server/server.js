const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const morgan = require('morgan');

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000);
console.log(thing);
