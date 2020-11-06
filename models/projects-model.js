const db = require("../data/db-config.js");

module.exports = {
    getAll,
    add,
}

function getAll() {
    return db("projects");
}

function add(project) {
    return db("projects").insert(project, "id")
        .then(ids => {
            const id = ids[0]
            return db("projects").where({ id }).first();

        })
}