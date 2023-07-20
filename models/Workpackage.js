
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workpackageSchema = new Schema({
Underscoreid:String , 


workpackageId:String , 


workpackageName:String , 




 workpackageMonth: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'month'
  }

]



})

module.exports = {
  Workpackage : mongoose.model('workpackage', workpackageSchema),
}

