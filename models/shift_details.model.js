const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shiftdetailSchema = new Schema({
  id: {
    type: String,
    unique: true,
    trim: true
  },
  EMP_ID: {
      type: String
  },
  Name: {
      type: String
  },
  StartscheduledDateTime: {
      type: Date
  },
  EndscheduledDateTime: {
      type: Date
  },
  location: {
      type: String
  }
},
{
  versionKey: false
});


const ShiftDetails = mongoose.model('shifts', shiftdetailSchema);

module.exports = ShiftDetails;