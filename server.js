'use strict';
const router = require('./routes.js');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let timeRequest = (req,res,next) => {
  req.requestTime = new Date();
  next();
};
let timeLog = (req, res, next) => {
  console.log('\x1b[35m',`method: ${req.method} \n path: ${req.path} \n request time: ${req.requestTime}`, '\x1b[0m');
  next();
};

const square = (number) => (req, res, next) => {
  req.number = number * number;
  next();
};

app.use(timeRequest);
app.use(timeLog);
app.use(router);

app.get('/a',(req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', square(2), (req,res) => {
  res.status(200).send(`Route B, numbers = ${req.number} `);
});


// error handler
app.use((err,req,res,next) => {
  console.log('In the error handler');
  res.status(500);
  res.send('500: in the error handler');
});

// not found
app.use('*',(req,res,next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('404: No idea what you want');
  res.end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));







