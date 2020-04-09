/**
 * @file Request a quote schema.
 * @author Krutin Trivedi <krutin@dal.ca>
 */

//importing Components & required Modules
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//defining the schema for the collection 'user request'
const UserRequestSchema = new Schema({
    firstName:{
        type: String,
        required: false,
        trim: true,
        minlength: 3 
    },
    lastName:{
        type: String,
        required: false,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

//exporting the schema as User
module.exports = mongoose.model('user_request', UserRequestSchema);