/**
 * The SeptemberController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SeptemberService');
const createseptember = async (request, response) => {
  await Controller.handleRequest(request, response, service.createseptember);
};

const deleteseptember = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteseptember);
};

const getAllseptember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllseptember);
};

const getByParamsseptember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsseptember);
};

const getseptember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getseptember);
};

const updateseptember = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateseptember);
};


module.exports = {
  createseptember,
  deleteseptember,
  getAllseptember,
  getByParamsseptember,
  getseptember,
  updateseptember,
};
