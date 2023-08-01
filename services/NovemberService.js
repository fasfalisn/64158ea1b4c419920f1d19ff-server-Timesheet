/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { November } = require('../models/November');

/**
* Creates the data
*
* november November data to be created
* returns november
* */
const createnovember = ({ november }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new November(november).save();
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
* novemberId String the Id parameter
* no response value expected for this operation
* */
const deletenovember = ({ novemberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await November.findOneAndDelete({ _id:novemberId }).exec();
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
const getAllnovember = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await November.find()
      .populate({
        path: 'employeeNov',
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
const getByParamsnovember = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await November.find(JSON.parse( filter ))
      .populate({
        path: 'employeeNov',
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
* novemberId String the Id parameter
* returns november
* */
const getnovember = ({ novemberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await November.findById(novemberId)
      
      .populate({
        path: 'employeeNov',
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
* novemberId String the Id parameter
* november November data to be updated (optional)
* returns november
* */
const updatenovember = ({ novemberId, november }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await November.findOneAndUpdate({ _id:novemberId },november).exec();
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
  createnovember,
  deletenovember,
  getAllnovember,
  getByParamsnovember,
  getnovember,
  updatenovember,
};
