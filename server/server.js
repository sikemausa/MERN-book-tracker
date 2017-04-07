const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let storedGoal = {};
let finishedBooks = [];
let booksToRead = [];
let booksInProgress = [];
let id = 0;

app.get('/goal', function(req, res){
  res.json(goal);
});

app.post('/goal', function(req, res){
  let goal = req.body;
  id++;
  goal.id = id;
  storedGoal = goal;
});

app.get('/finishedBooks', function(req, res){
  res.json(finsishedBooks);
});

app.get('/booksToRead', function(req, res){
  res.json(booksToRead);
});

app.get('/booksInProgress', function(req, res){
  res.json(booksInProgress);
});

app.listen(3000);
console.log('listening on port 3000!!');
