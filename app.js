// var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
const passport = require("passport");
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const http = require('http');

require('dotenv').config();

// var indexRouter = require('./routes/index');

const mongoose = require('mongoose');

var app = express();
const port = process.env.PORT || 5000;


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);

// app.use(bodyParser.json({limit: '5mb'}));
// app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// establishing mongo atlas connections
mongoose.connect('mongodb+srv://Hawk_Nikita:Web@nikita_2602@cluster0-uvcpm.mongodb.net/Hawk_Secutiy?retryWrites=true&w=majority',
                  { useNewUrlParser: true, useCreateIndex: true}
                );

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

const locationRouter = require('./routes/location');
app.use('/location', locationRouter);

const shiftRouter = require('./routes/shift_details');
app.use('/shift_details', shiftRouter);

const shiftuploadRouter = require('./routes/shift_upload');
app.use('/shift_upload', shiftuploadRouter);

const availRouter = require('./routes/avail_display');
app.use('/availability_display', availRouter);

// defining routes 
const employeeRouter = require('./routes/profileManagement');
app.use('/employee', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});