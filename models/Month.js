
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monthSchema = new Schema({
Underscoreid:String , 


monthName:String , 


monthId:String , 




 monthDay: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'day'
  }

]



})

module.exports = {
  Month : mongoose.model('month', monthSchema),
}

