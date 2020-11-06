const db = require("../data/db-config.js");

module.exports = {
    getAll,
    add,
}

function getAll() {
    return db("resources");
}

function add(resource) {
    return db("resources").insert(resource, "id")
        .then(ids => {
            const id = ids[0]
            return db("resources").where({ id }).first();

        })
}