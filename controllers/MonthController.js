/**
 * The MonthController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/MonthService');
const createmonth = async (request, response) => {
  await Controller.handleRequest(request, response, service.createmonth);
};

const deletemonth = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletemonth);
};

const getAllmonth = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllmonth);
};

const getByParamsmonth = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsmonth);
};

const getmonth = async (request, response) => {
  await Controller.handleRequest(request, response, service.getmonth);
};

const updatemonth = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatemonth);
};


module.exports = {
  createmonth,
  deletemonth,
  getAllmonth,
  getByParamsmonth,
  getmonth,
  updatemonth,
};
