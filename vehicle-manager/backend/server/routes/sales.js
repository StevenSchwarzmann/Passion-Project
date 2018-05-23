const express = require("express");
const router = express.Router();
const Sale = require("../models/Sales");

router.get("/", (req, res) => {
    Sale
      .find()
      .then(sale => {
          res.status(200).json(sale);
    });
  });
  
  router.get("/:id", (req, res) => {
    Sale
      .findById()
      .then(sale => {
          res.status(200).json(sale);
    });
  });
  
  router.post("/", (req, res) => {
    const sale = new Sale(req.body);
    sale
      .save()
      .then(sale => {
        res.status(201).json(sale)
        console.log("Sale saved to DB")
      }).catch(err => res.send(console.err))
  });

    router.put("/:id", (req, res) => {
      Sale
        .findById(req.body)
        .then( sale => {
          if(!sale) res.status(404).send();
          console.log("Saved updated sale");
          res.status(204).json(sale);
        })
        .catch(err => res.send(err.message));
    })

    router.delete("/:id", (req,res) => {
        Sales
        .findByIdAndRemove(req.body, (err, deletedSale) => {
          if(deletedSale) {
            res.status(200).json(deletedSale);
          } else {
            res.status(404).send("Error: Sale not found")
          }
        })
    })

module.exports = router;