'use strict';

function logger(request, response, next) {
  console.log('Incoming Request: ', request.method, request.path);
  next();
}

module.exports = logger