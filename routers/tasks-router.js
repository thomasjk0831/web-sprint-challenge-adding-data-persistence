const express = require("express");
const Tasks = require("../models/tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
    Tasks.getAll()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {

        });
});

router.post("/", (req, res) => {
    Tasks.add(req.body)
        .then(task => {
            res.status(201).json({ created: task });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to add Task" });
        });
});


module.exports = router