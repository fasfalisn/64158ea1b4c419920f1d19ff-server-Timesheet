/**
 * The WorkpackageController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/WorkpackageService');
const createworkpackage = async (request, response) => {
  await Controller.handleRequest(request, response, service.createworkpackage);
};

const deleteworkpackage = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteworkpackage);
};

const getAllworkpackage = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllworkpackage);
};

const getByParamsworkpackage = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsworkpackage);
};

const getworkpackage = async (request, response) => {
  await Controller.handleRequest(request, response, service.getworkpackage);
};

const updateworkpackage = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateworkpackage);
};


module.exports = {
  createworkpackage,
  deleteworkpackage,
  getAllworkpackage,
  getByParamsworkpackage,
  getworkpackage,
  updateworkpackage,
};
