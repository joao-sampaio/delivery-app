const express = require('express');
const cors = require('cors');
const { userRouter, productRouter, salesRouter } = require('../database/routers');

const app = express();

const corsOptions = {
    origin: 'https://drinkdelivery.vercel.app',
    allowedHeaders:  '*',
    optionsSuccessStatus: 200
  }

app.use('*', cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(express.json());
app.use(express.static('public'));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/sales', salesRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
