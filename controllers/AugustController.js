/**
 * The AugustController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AugustService');
const createaugust = async (request, response) => {
  await Controller.handleRequest(request, response, service.createaugust);
};

const deleteaugust = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteaugust);
};

const getAllaugust = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllaugust);
};

const getByParamsaugust = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsaugust);
};

const getaugust = async (request, response) => {
  await Controller.handleRequest(request, response, service.getaugust);
};

const updateaugust = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateaugust);
};


module.exports = {
  createaugust,
  deleteaugust,
  getAllaugust,
  getByParamsaugust,
  getaugust,
  updateaugust,
};
