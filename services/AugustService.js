/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { August } = require('../models/August');

/**
* Creates the data
*
* august August data to be created
* returns august
* */
const createaugust = ({ august }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new August(august).save();
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
* augustId String the Id parameter
* no response value expected for this operation
* */
const deleteaugust = ({ augustId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await August.findOneAndDelete({ _id:augustId }).exec();
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
const getAllaugust = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await August.find()
      .populate({
        path: 'employee',
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
const getByParamsaugust = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await August.find(JSON.parse( filter ))
      .populate({
        path: 'employee',
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
* augustId String the Id parameter
* returns august
* */
const getaugust = ({ augustId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await August.findById(augustId)
      
      .populate({
        path: 'employee',
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
* augustId String the Id parameter
* august August data to be updated (optional)
* returns august
* */
const updateaugust = ({ augustId, august }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await August.findOneAndUpdate({ _id:augustId },august).exec();
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
  createaugust,
  deleteaugust,
  getAllaugust,
  getByParamsaugust,
  getaugust,
  updateaugust,
};
