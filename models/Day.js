
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
Underscoreid:String , 


dayId:String , 


dayDate:Date , 


dayHours:Number 



})

module.exports = {
  Day : mongoose.model('day', daySchema),
}

