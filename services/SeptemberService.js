/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { September } = require('../models/September');

/**
* Creates the data
*
* september September data to be created
* returns september
* */
const createseptember = ({ september }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new September(september).save();
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
* septemberId String the Id parameter
* no response value expected for this operation
* */
const deleteseptember = ({ septemberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await September.findOneAndDelete({ _id:septemberId }).exec();
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
const getAllseptember = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await September.find()
      .populate({
        path: 'employeeSept',
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
const getByParamsseptember = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await September.find(JSON.parse( filter ))
      .populate({
        path: 'employeeSept',
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
* septemberId String the Id parameter
* returns september
* */
const getseptember = ({ septemberId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await September.findById(septemberId)
      
      .populate({
        path: 'employeeSept',
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
* septemberId String the Id parameter
* september September data to be updated (optional)
* returns september
* */
const updateseptember = ({ septemberId, september }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await September.findOneAndUpdate({ _id:septemberId },september).exec();
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
  createseptember,
  deleteseptember,
  getAllseptember,
  getByParamsseptember,
  getseptember,
  updateseptember,
};
