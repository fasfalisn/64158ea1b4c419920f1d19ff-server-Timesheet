
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const novemberSchema = new Schema({
Underscoreid:String , 


novDay1:String , 


novDay2:String , 


novDay3:String , 


novDay4:String , 


novDay5:String , 


novDay6:String , 


novDay7:String , 


novDay8:String , 


novDay9:String , 


novDay10:String , 


novDay11:String , 


novDay12:String , 


novDay13:String , 


novDay14:String , 


novDay15:String , 


novDay16:String , 


novDay17:String , 


novDay18:String , 


novDay19:String , 


novDay20:String , 


novDay21:String , 


novDay22:String , 


employeeNov:  
  {
    type: Schema.Types.ObjectId,
    ref:'user'
  }

 



})

module.exports = {
  November : mongoose.model('november', novemberSchema),
}

