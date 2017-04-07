const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let books = [];
let id = 0;

app.get('/books', function(req, res){
  res.json(books);
});

app.listen(3000);
console.log('listening on port 3000!!');
