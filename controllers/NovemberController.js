/**
 * The NovemberController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NovemberService');
const createnovember = async (request, response) => {
  await Controller.handleRequest(request, response, service.createnovember);
};

const deletenovember = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletenovember);
};

const getAllnovember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllnovember);
};

const getByParamsnovember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsnovember);
};

const getnovember = async (request, response) => {
  await Controller.handleRequest(request, response, service.getnovember);
};

const updatenovember = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatenovember);
};


module.exports = {
  createnovember,
  deletenovember,
  getAllnovember,
  getByParamsnovember,
  getnovember,
  updatenovember,
};
