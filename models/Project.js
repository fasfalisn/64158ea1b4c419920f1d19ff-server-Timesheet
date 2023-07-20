
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


projectId:String , 


projectName:String , 




 projectWp: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'workpackage'
  }

]



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

