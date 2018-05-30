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
      .findById(req.params.id)
      .then(vehicle => {
           vehicle ? res.status(200).json(vehicle) : res.status(404).send("Error 404: Vehicle not found");
    }).catch(err => res.status(500).send("An internal server error has occured"));
  });
  
  router.post("/", (req, res) => {
    let vehicle = new Vehicle(req.body);
    vehicle
      .save()
      .then(vehicle => {
        res.status(201).json(vehicle)
        console.log("Vehicle saved to DB")
      }).catch(err => res.send(console.err))
  });

    router.put("/:id", (req, res) => {
      Vehicle
        .findByIdAndUpdate(req.params.id, req.body)
        .then( vehicle => {
            vehicle ? res.status(204).json(vehicle) : res.status(404).send("Opps! Something went wrong, Could not update vehicle");
        })
        .catch(err => res.send(console.err));
    })

    router.delete("/:id", (req,res) => {
        Vehicle
        .findByIdAndRemove(req.params.id, (err, deletedVehicle) => {
          if(deletedVehicle) {
            res.status(200).json(deletedVehicle);
          } else {
            res.status(404).send("Error: Vehicle not found")
          }
        })
    })

  module.exports = router;