/**
 * The DecemberController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DecemberService');
const createdecember = async (request, response) => {
  await Controller.handleRequest(request, response, service.createdecember);
};

const deletedecember = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletedecember);
};

const getAlldecember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlldecember);
};

const getByParamsdecember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsdecember);
};

const getdecember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getdecember);
};

const updatedecember = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatedecember);
};


module.exports = {
  createdecember,
  deletedecember,
  getAlldecember,
  getByParamsdecember,
  getdecember,
  updatedecember,
};
