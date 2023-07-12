/**
 * The OctoberController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/OctoberService');
const createoctober = async (request, response) => {
  await Controller.handleRequest(request, response, service.createoctober);
};

const deleteoctober = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteoctober);
};

const getAlloctober = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlloctober);
};

const getByParamsoctober = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsoctober);
};

const getoctober = async (request, response) => {
  await Controller.handleRequest(request, response, service.getoctober);
};

const updateoctober = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateoctober);
};


module.exports = {
  createoctober,
  deleteoctober,
  getAlloctober,
  getByParamsoctober,
  getoctober,
  updateoctober,
};
