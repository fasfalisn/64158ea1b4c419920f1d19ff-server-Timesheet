/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { October } = require('../models/October');

/**
* Creates the data
*
* october October data to be created
* returns october
* */
const createoctober = ({ october }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new October(october).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* octoberId String the Id parameter
* no response value expected for this operation
* */
const deleteoctober = ({ octoberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await October.findOneAndDelete({ _id:octoberId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlloctober = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await October.find()
      .populate({
        path: 'employeeOct',
        populate: {
          path: 'userProject',
          populate: {
            path: 'projectWp'
          }
        }
        })
      .exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamsoctober = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await October.find(JSON.parse( filter ))
      .populate({
        path: 'employeeOct',
        populate: {
          path: 'userProject',
          populate: {
            path: 'projectWp'
          }
        }
        })
      .exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* octoberId String the Id parameter
* returns october
* */
const getoctober = ({ octoberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await October.findById(octoberId)
      
      .populate({
        path: 'employeeOct',
        populate: {
          path: 'userProject',
          populate: {
            path: 'projectWp'
          }
        }
        })
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* octoberId String the Id parameter
* october October data to be updated (optional)
* returns october
* */
const updateoctober = ({ octoberId, october }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await October.findOneAndUpdate({ _id:octoberId },october).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createoctober,
  deleteoctober,
  getAlloctober,
  getByParamsoctober,
  getoctober,
  updateoctober,
};
