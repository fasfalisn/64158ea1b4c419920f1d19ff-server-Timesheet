/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Workpackage } = require('../models/Workpackage');

/**
* Creates the data
*
* workpackage Workpackage data to be created
* returns workpackage
* */
const createworkpackage = ({ workpackage }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Workpackage(workpackage).save();
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
* workpackageId String the Id parameter
* no response value expected for this operation
* */
const deleteworkpackage = ({ workpackageId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Workpackage.findOneAndDelete({ _id:workpackageId }).exec();
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
const getAllworkpackage = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Workpackage.find().populate(['workpackageMonth']).exec();
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
const getByParamsworkpackage = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Workpackage.find(JSON.parse( filter )).populate(['workpackageMonth']).exec();
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
* workpackageId String the Id parameter
* returns workpackage
* */
const getworkpackage = ({ workpackageId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Workpackage.findById(workpackageId)
      .populate(['workpackageMonth']).exec();
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
* workpackageId String the Id parameter
* workpackage Workpackage data to be updated (optional)
* returns workpackage
* */
const updateworkpackage = ({ workpackageId, workpackage }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Workpackage.findOneAndUpdate({ _id:workpackageId },workpackage).exec();
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
  createworkpackage,
  deleteworkpackage,
  getAllworkpackage,
  getByParamsworkpackage,
  getworkpackage,
  updateworkpackage,
};
