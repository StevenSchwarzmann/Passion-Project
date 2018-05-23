const express = require('express');
const router = express.Router();
const Vehicle = require("../models/Vehicles");

router.get("/", (req, res) => {
    Vehicle
      .find()
      .then(vehicle => {
          res.status(200).json(vehicle);
    });
  });
  
  router.get("/:id", (req, res) => {
    Vehicle
      .findById()
      .then(vehicle => {
          res.status(200).json(vehicle);
    });
  });
  
  router.post("/", (req, res) => {
    const vehicle = new Vehicle(req.body);
    vehicle
      .save()
      .then(vehcile => {
        res.status(201).json(vehicle)
        console.log("Vehicle saved to DB")
      }).catch(err => res.send(console.err))
  });

    router.put("/:id", (req, res) => {
      Vehicle
        .findById(req.body)
        .then( vehicle => {
          if(!vehicle) res.status(404).send();
          console.log("Saved updated vehicle");
          res.status(204).json(vehicle);
        })
        .catch(err => res.send(err.message));
    })

    router.delete("/:id", (req,res) => {
        Vehicle
        .findByIdAndRemove(req.body, (err, deletedVehicle) => {
          if(deletedVehicle) {
            res.status(200).json(deletedVehicle);
          } else {
            res.status(404).send("Error: Vehicle not found")
          }
        })
    })

  module.exports = router;