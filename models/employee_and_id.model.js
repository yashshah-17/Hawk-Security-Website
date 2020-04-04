// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// //defining the schema for the collection 'users'
// const empnidSchema = new Schema({
//     //_id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
//     EMP_ID:{
//         type: String,
//         required: true,
//         trim: true, 
//     },
//     Name:{
//         type: String,
//         required: true,
//         trim: true,
//     },
//     Address:{
//         type: String,
//         required: true,
//         trim: true,
//     },
//     Phone:{
//         type: String,
//         required: true,
//         trim: true,
//     },
//     Email:{
//         type: String,
//         require: true,
//     },
//     DOB:{
//         type: Number,
//         require: true,
//         trim: true,
//     },
//     Password:{
//         type: String,
//         minlength: 8,
//         maxlength: 50,
//     }
// });

// //exporting the schema as User
// module.exports = mongoose.model('employee_details', empnidSchema);