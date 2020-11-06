const express = require("express");
const server = express();
server.use(express.json());
const ProjectsRouter = require("./routers/projects-router");
const ResourcesRouter = require("./routers/resources-router");
const TasksRouter = require("./routers/tasks-router");


server.get('/', (req, res) => {
    res.status(200).json({ msg: "server is up" })
})

server.use("/api/projects", ProjectsRouter)
server.use("/api/resources", ResourcesRouter)
server.use("/api/tasks", TasksRouter)

module.exports = server;
