const express = require('express');
const cors = require('cors');
const { userRouter, productRouter } = require('../database/routers');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
