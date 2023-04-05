'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the express server', () => {
  test('Should response with a 500 for a POST to /person with no name', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(500);
    expect(response.body).toEqual({}); 
  });
})