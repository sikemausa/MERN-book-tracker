var express = require('express');
var bodyparser = require('bodyparser');
var app = express();
var morgan = require('morgan');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000);
console.log('on port 3000');
