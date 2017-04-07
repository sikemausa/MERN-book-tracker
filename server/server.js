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

app.get('/goal', (req, res) => {
  res.send(goal);
});

app.post('/goal', (req, res) => {
  let goal = req.body;
  id++;
  goal.id = id;
  storedGoal = goal;
});

app.put('/goal', (req, res) => {
  let update = req.body;
  if(update.id) delete update.id;
  storedGoal = update;
  res.send(update);
});

app.get('/finishedBooks', (req, res) => {
  res.send(finsishedBooks);
});

app.get('/booksToRead', (req, res) => {
  res.send(booksToRead);
});

app.get('/booksInProgress', (req, res) => {
  res.send(booksInProgress);
});

app.listen(3000);
console.log('listening on port 3000!!');
