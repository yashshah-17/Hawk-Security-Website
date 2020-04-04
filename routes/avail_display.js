const router = require('express').Router();

let Empdetails = require('../models/employee.model');
let Availability = require('../models/availability.model'); 

router.route('/').get((req, res) => {
  Availability.find()
    .then(Availability => res.json(Availability))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  Empdetails.find({_id: id})
    .then(Data => res.json(Data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const emp_id = req.body.id;
  const name = req.body.first_name + " " + req.body.last_name;
  const start = req.body.start;
  const end = req.body.end;

  Availability.find({eid: emp_id},
    (err, result)=>{
      if(err){
        return res.status(404).send('Sorry! Would not be able to process your request');
      }
      if(result.length > 0)
      {
        const query = {eid: emp_id};
        const newvalues = {$set: 
          { eid: emp_id, 
            Emp_Name: name, 
            MON_START: start[0], 
            MON_END: end[0],
            TUE_START: start[1], 
            TUE_END: end[1], 
            WED_START: start[2], 
            WED_END: end[2], 
            THURS_START: start[3], 
            THURS_END: end[3], 
            FRI_START: start[4], 
            FRI_END: end[4], 
            SAT_START: start[5], 
            SAT_END: end[5], 
            SUN_START: start[6], 
            SUN_END: end[6]
          }};
        Availability.updateOne(query, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
        })
        .catch(err => res.status(400).json('Error: ' + err));
      }
      else
      {
        const avail_values = new Availability({ eid: emp_id, 
          Emp_Name: name, 
          MON_START: start[0], 
          MON_END: end[0],
          TUE_START: start[1], 
          TUE_END: end[1], 
          WED_START: start[2], 
          WED_END: end[2], 
          THURS_START: start[3], 
          THURS_END: end[3], 
          FRI_START: start[4], 
          FRI_END: end[4], 
          SAT_START: start[5], 
          SAT_END: end[5], 
          SUN_START: start[6], 
          SUN_END: end[6]
        });

        console.log(avail_values);
        
        avail_values.save()
          .then(() => res.json('Data added...!  ' + avail_values));
      }
    });
    
});


module.exports = router;