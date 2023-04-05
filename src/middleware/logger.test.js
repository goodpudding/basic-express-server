'use strict';

const logger = require('./logger');

describe('Testing the logger middleware', () => {
  test('Should validate that a name parameter is sent.', () => {
    const request = {
      query: {
        name: 'trey'
      }
    };
    const response = {};
    const next = jest.fn();

    logger(request, response, next);
    expect(request.query.name).toEqual("trey");
  });
});