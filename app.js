const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dbConnection = require('./db');

const indexRouter = require('./routes/index');
const partsRouter = require('./routes/parts');
const lukeRouter = require('./routes/luke');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

dbConnection();

app.use('/', indexRouter);
app.use('/parts', partsRouter);
app.use('/luke', lukeRouter);

module.exports = app;
