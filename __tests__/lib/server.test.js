'use strict';

const { server } = require('../../server.js');
const supergoose = require('../supergoose.js');
const mockRequest = supergoose(server);

describe('web server', () => {

  it('should respond with a 200 on a valid route', () => {

    return mockRequest
      .get('/a')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('should respond with a 200 on a valid route', () => {

    return mockRequest
      .get('/b')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('should respond with a 200 on a valid route', () => {

    return mockRequest
      .post('/c')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('should respond with a 200 on a valid route', () => {

    return mockRequest
      .get('/d')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });


});