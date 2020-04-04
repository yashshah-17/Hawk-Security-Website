const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const availSchema = new Schema({
  eid: {
    type: String,
    unique: true
  },
  Emp_Name: {
    type: String
  },
  MON_START: {
    type: String
  },
  MON_END: {
    type: String
  },
  TUE_START: {
    type: String
  },
  TUE_END: {
    type: String
  },
  WED_START: {
    type: String
  },
  WED_END: {
    type: String
  },
  THURS_START: {
    type: String
  },
  THURS_END: {
    type: String
  },
  FRI_START: {
    type: String
  },
  FRI_END: {
    type: String
  },
  SAT_START: {
    type: String
  },
  SAT_END: {
    type: String
  },
  SUN_START: {
    type: String
  },
  SUN_END: {
    type: String
  },
},
{
  versionKey: false
});

const AvailDetails = mongoose.model('avail_details', availSchema);

module.exports = AvailDetails;