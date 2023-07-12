
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const octoberSchema = new Schema({
Underscoreid:String , 


employeeOct:  
  {
    type: Schema.Types.ObjectId,
    ref:'user'
  }

 , 


octDay1:String , 


octDay2:String , 


octDay3:String , 


octDay4:String , 


octDay5:String , 


octDay6:String , 


octDay7:String , 


octDay8:String , 


octDay9:String , 


octDay10:String , 


octDay11:String , 


octDay12:String , 


octDay13:String , 


octDay14:String , 


octDay15:String , 


octDay16:String , 


octDay17:String , 


octDay18:String , 


octDay20:String , 


octDay21:String , 


octDay22:String 



})

module.exports = {
  October : mongoose.model('october', octoberSchema),
}

