/* eslint-disable */

// DEPENDENCIES
const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('supertest');

// MODULES
const app = `${process.env.PROTOCOL}${process.env.MASTER_HOST}:${process.env.MASTER_PORT}`;
const masterHandler = require('../master/master_controller.js');

// MASTER
describe('Master Server', () => {
  // When sending jobs, should return job results;
  describe('POST api/master', () => {
    it('should respond a 200 status code when receiving job', done => {
      request(app)
        .post('/api/master')
        .expect(200)
        .end(done)
    });
  });

  describe('POST/api/requestJob', () => {
    // Should respond with 200 status code
    it('should return a 200 status code', done => {
      request(app)
        .post('/api/requestJob')
        .expect(200)
        .end(done)
    });
  });
});
    