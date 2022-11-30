const express = require('express');
const cors = require('cors');
const { userRouter } = require('../database/routers');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(express.json())
app.use('/users', userRouter)
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
