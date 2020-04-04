const router = require('express').Router();

let Location = require('../models/location.model.js'); 

// Get locations' listing
router.route('/').get((req, res) => {
  Location.find()
    .then(Location => res.json(Location))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new location 
router.route('/add').post((req, res) => {
  const location_Id = req.body.Location_ID;
  const name = req.body.Name;
  const address = req.body.Address;

  const newlocation = new Location({ Location_ID: location_Id, Name: name, Address: address });

  newlocation.save()
    .then(() => res.json('Location added..  ' + newlocation))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;