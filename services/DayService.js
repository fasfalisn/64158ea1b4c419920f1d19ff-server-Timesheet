/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Day } = require('../models/Day');

/**
* Creates the data
*
* day Day data to be created
* returns day
* */
const createday = ({ day }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Day(day).save();
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
* dayId String the Id parameter
* no response value expected for this operation
* */
const deleteday = ({ dayId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Day.findOneAndDelete({ _id:dayId }).exec();
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
const getAllday = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Day.find().exec();
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
const getByParamsday = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Day.find(JSON.parse( filter )).exec();
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
* dayId String the Id parameter
* returns day
* */
const getday = ({ dayId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Day.findById(dayId)
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
* dayId String the Id parameter
* day Day data to be updated (optional)
* returns day
* */
const updateday = ({ dayId, day }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Day.findOneAndUpdate({ _id:dayId },day).exec();
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
  createday,
  deleteday,
  getAllday,
  getByParamsday,
  getday,
  updateday,
};
