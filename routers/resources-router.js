const express = require("express");
const Resources = require("../models/resources-model");

const router = express.Router();

router.get("/", (req, res) => {
    Resources.getAll()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get Resources" });
        });
});

router.post("/", (req, res) => {
    if (!req.body.description || !req.body.name) {
        res.json({ msg: "error, Resources need values for 'name' and 'description'" })
    }
    else {
        Resources.add(req.body)
            .then(resource => {
                res.status(201).json({ created: resource });
            })
            .catch(err => {
                res.status(500).json({ message: "Failed to create new resource" });
            });

    }
});

module.exports = router