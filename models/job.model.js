const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  JOB_ID: {
    type: String,
    unique: true
  },
  JOB_ROLE: {
    type: String
  },
  JOB_DESC: {
    type: String
  },
  JOB_QUAL: {
    type: String
  }
});

const JobDetails = mongoose.model('job_details', jobSchema);

module.exports = JobDetails;