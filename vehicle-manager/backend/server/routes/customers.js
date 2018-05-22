const express = require('express');
const router = express.Router();
const Customers = require("../models/Customers");

router.get("/", (req, res) => {
    Customers
      .find()
      .then(customers => {
          res.status(200).json(customers);
    });
  });
  
  router.get("/:id", (req, res) => {
    Customers
      .findById()
      .then(customer => {
          res.status(200).json(customer);
    });
  });
  
  router.post("/", (req, res) => {
    const customer = new Customer(req.body);
    customer
      .save()
      .then(customer => {
        res.status(201).json(customer)
        console.log("Customer saved to DB")
      }).catch(err => res.send(console.err))
  });

    router.put("/:id", (req, res) => {
      Customers
        .findById(req.body)
        .then( customer => {
          if(!customer) res.status(404).send();
          console.log("Saved updated customer");
          res.status(204).json(customer);
        })
        .catch(err => res.send(err.message));
    })

    router.delete("/:id", (req,res) => {
        Customers
        .findByIdAndRemove(req.body, (err, deletedCustomer) => {
          if(deletedCustomer) {
            res.status(200).json(deletedVehicle);
          } else {
            res.status(404).send("Error: Customer not found")
          }
        })
    })

module.exports = router;