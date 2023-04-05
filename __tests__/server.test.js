'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing server', () => {
  test('This should come back with 404 on a bad route', async () => {
    const response = await request.get('/nowhere');
    expect(response.status).toEqual(404);
  });

  test('This should come back with 404 for bad method', async () => {
    const response = await request.put('/person');
    expect(response.status).toEqual(404);
  });

  test('This should come back with 500 if no name in the query string', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(500);
  });

  test('This should come back with 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=w');
    expect(response.status).toEqual(200);
  });

  test('given an name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=trey');
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject([{ name: 'trey' }]);
  });
});