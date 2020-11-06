const express = require("express");
const Tasks = require("../models/tasks-model");
const Projects = require('../models/projects-model')

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
    if (!req.body.description || !req.body.project_id) {
        res.json({ msg: "error, tasks need values for 'description' and 'project_id' " })
    }
    else {


        Tasks.add(req.body)
            .then(task => {
                res.status(201).json({ created: task });
            })
            .catch(err => {
                res.status(500).json({ message: "Failed to add Task" });
            });

    }
});




module.exports = router