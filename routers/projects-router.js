const express = require("express");
const Projects = require("../models/projects-model");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.getAll()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get Projects" });
        });
});

router.post("/", (req, res) => {
    Projects.add(req.body)
        .then(project => {
            res.status(201).json({ created: project });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new project" });
        });
});

module.exports = router