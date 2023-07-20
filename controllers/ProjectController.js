/**
 * The ProjectController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProjectService');
const createproject = async (request, response) => {
  await Controller.handleRequest(request, response, service.createproject);
};

const deleteproject = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteproject);
};

const getAllproject = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllproject);
};

const getByParamsproject = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsproject);
};

const getproject = async (request, response) => {
  await Controller.handleRequest(request, response, service.getproject);
};

const updateproject = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateproject);
};


module.exports = {
  createproject,
  deleteproject,
  getAllproject,
  getByParamsproject,
  getproject,
  updateproject,
};
