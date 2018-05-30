const express = require('express');
const router = express.Router();
const Customer = require("../models/Customers");

router.get("/", (req, res) => {
  console.log(req.params)
    Customer
      .find()
      .then(customer => {
          res.status(200).json(customer);
    });
  });
  
  router.get("/:id", (req, res) => {
    Customer
      .findById(req.params.id)
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
      Customer
        .findByIdAndUpdate(req.params.id, req.body)
        .then( customer => {
          customer ? res.status(204).json(customer) : res.status(404).send("Opps! Something went wrong, Could not update customer");
        })
        .catch(err => res.send(err.message));
    })

    router.delete("/:id", (req,res) => {
        Customer
        .findByIdAndRemove(req.body, (err, deletedCustomer) => {
          if(deletedCustomer) {
            res.status(200).json(deletedVehicle);
          } else {
            res.status(404).send("Error: Customer not found")
          }
        })
    })

module.exports = router;