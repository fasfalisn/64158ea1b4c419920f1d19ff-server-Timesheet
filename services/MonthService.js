/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Month } = require('../models/Month');

/**
* Creates the data
*
* month Month data to be created
* returns month
* */
const createmonth = ({ month }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Month(month).save();
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
* monthId String the Id parameter
* no response value expected for this operation
* */
const deletemonth = ({ monthId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Month.findOneAndDelete({ _id:monthId }).exec();
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
const getAllmonth = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Month.find().populate(['monthDay']).exec();
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
const getByParamsmonth = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Month.find(JSON.parse( filter )).populate(['monthDay']).exec();
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
* monthId String the Id parameter
* returns month
* */
const getmonth = ({ monthId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Month.findById(monthId)
      .populate(['monthDay']).exec();
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
* monthId String the Id parameter
* month Month data to be updated (optional)
* returns month
* */
const updatemonth = ({ monthId, month }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Month.findOneAndUpdate({ _id:monthId },month).exec();
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
  createmonth,
  deletemonth,
  getAllmonth,
  getByParamsmonth,
  getmonth,
  updatemonth,
};
