'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const serverError = require('./error-handlers/500');
const notFoundError = require('./error-handlers/404');

app.use(cors());
app.use(logger);

const data = [];


app.get('/person', (request, response, next) => {
  response.send(data);
});

app.post('/person', validator, (request, response, next) => {
  data.push(request.query.name);
  response.status(200).send({name: request.query.name});
});

app.use(serverError);
app.get('/taco', notFoundError);


module.exports = {
  start: (port) => app.listen(port, () => {
    console.log('Server is listening');
  }),
};