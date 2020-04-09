/* Nikita Patel -- B00826639*/

const router = require('express').Router();

let Shiftdetails = require('../models/shift_details.model.js'); 

/* GET users listing. */

let shifts = []

router.route('/').get((req, res) => {
    Shiftdetails.find()
    
    .then(Shiftdetails => res.json(Shiftdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*  API for fatching shifts data based on employee id */
router.route('/empshifts/:empid').get((req, res) => {
    const empid = req.params.empid;
    console.log(empid)
    Shiftdetails.find({EMP_ID: empid})
      .then(Shiftdetails => res.json(Shiftdetails))
      .catch(err => res.status(400).json('Error: ' + err));
  });

/*  API for fatching shifts data based on date */
router.route('/:date').get((req, res) => {

    const scheduleDate = new Date(req.params.date);
    const nextDate = new Date(scheduleDate)
    
    nextDate.setDate(nextDate.getDate() + 1)
    Shiftdetails.find({
        StartscheduledDateTime: {
            '$gt':scheduleDate,
            '$lt':nextDate
    }
    },(err, result)=>{
        if(err){
           return res.status(404).send('Shift not found');
        }
        if(result.length > 0){
           return res.json(result); 
        }
        return  res.status(404).send('Shift not found');
       
     });
});


module.exports = router;