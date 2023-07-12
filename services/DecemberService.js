/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { December } = require('../models/December');

/**
* Creates the data
*
* december December data to be created
* returns december
* */
const createdecember = ({ december }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new December(december).save();
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
* decemberId String the Id parameter
* no response value expected for this operation
* */
const deletedecember = ({ decemberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await December.findOneAndDelete({ _id:decemberId }).exec();
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
const getAlldecember = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await December.find().populate(['employeeDec']).exec();
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
const getByParamsdecember = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await December.find(JSON.parse( filter )).populate(['employeeDec']).exec();
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
* decemberId String the Id parameter
* returns december
* */
const getdecember = ({ decemberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await December.findById(decemberId)
      .populate(['employeeDec']).exec();
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
* decemberId String the Id parameter
* december December data to be updated (optional)
* returns december
* */
const updatedecember = ({ decemberId, december }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await December.findOneAndUpdate({ _id:decemberId },december).exec();
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
  createdecember,
  deletedecember,
  getAlldecember,
  getByParamsdecember,
  getdecember,
  updatedecember,
};
