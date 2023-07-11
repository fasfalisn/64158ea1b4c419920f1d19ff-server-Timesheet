
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const septemberSchema = new Schema({
Underscoreid:String , 


employeeSept:  
  {
    type: Schema.Types.ObjectId,
    ref:'user'
  }

 , 


septDay1:String , 


septDay2:String , 


septDay3:String , 


septDay4:String , 


septDay5:String , 


septDay6:String , 


septDay7:String , 


septDay8:String , 


septDay9:String , 


septDay10:String , 


septDay11:String , 


septDay12:String , 


septDay13:String , 


septDay14:String , 


septDay15:String , 


septDay16:String , 


septDay17:String , 


septDay18:String , 


septDay19:String , 


septDay20:String , 


septDay21:String 



})

module.exports = {
  September : mongoose.model('september', septemberSchema),
}

