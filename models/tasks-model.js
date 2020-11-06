const db = require("../data/db-config.js");

module.exports = {
    getAll,
    add,
}

// select  t.*, p.name as "project name" , p.description as "project_description"
// from tasks as t
// join projects as p on p.id = t.project_id
function getAll() {
    return db("tasks as t")
        .join("projects as p", "p.id", "=", "t.project_id")
        .select("t.*", "p.name as project name", "p.description as project_description")
}

function add(task) {
    return db("tasks").insert(task, "id")
        .then(ids => {
            const id = ids[0]
            return db("tasks").where({ id }).first();

        })
}