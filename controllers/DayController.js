/**
 * The DayController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DayService');
const createday = async (request, response) => {
  await Controller.handleRequest(request, response, service.createday);
};

const deleteday = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteday);
};

const getAllday = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllday);
};

const getByParamsday = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsday);
};

const getday = async (request, response) => {
  await Controller.handleRequest(request, response, service.getday);
};

const updateday = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateday);
};


module.exports = {
  createday,
  deleteday,
  getAllday,
  getByParamsday,
  getday,
  updateday,
};
