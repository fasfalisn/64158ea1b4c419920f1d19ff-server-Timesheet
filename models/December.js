
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const decemberSchema = new Schema({
Underscoreid:String , 


decDay1:String , 


decDay2:String , 


decDay3:String , 


decDay4:String , 


decDay5:String , 


decDay6:String , 


decDay7:String , 


decDay8:String , 


decDay9:String , 


decDay10:String , 


decDay11:String , 


decDay12:String , 


decDay13:String , 


decDay14:String , 


decDay15:String , 


decDay16:String , 


decDay17:String , 


decDay18:String , 


decDay19:String , 


decDay20:String , 


decDay21:String , 


employeeDec:  
  {
    type: Schema.Types.ObjectId,
    ref:'user'
  }

 



})

module.exports = {
  December : mongoose.model('december', decemberSchema),
}

