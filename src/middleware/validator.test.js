'use strict';

const validator = require('./validator');

describe('Testing the validator middleware', () => {
  test('Should validate that a name parameter is sent.', () => {
    const request = {
      query: {
        name: 'trey'
      }
    };
    const response = {};
    // since we don;t want to build next function, we just need to make sure it's called.
    const next = jest.fn();
    // const next = function() {}

    validator(request, response, next);
    expect(request.query.name).toEqual("trey");
    expect(next).toHaveBeenCalled();
  });

  test('If No message on the request, passes an error into next', () => {
    const request = {query: {}};
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(next).toHaveBeenCalled();
  })
});
