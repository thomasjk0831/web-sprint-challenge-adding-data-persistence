
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.string('description', 512).notNullable();
            tbl.boolean('completed').defaultTo(false);
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 512).notNullable();
            tbl.string('notes', 512)
            tbl.boolean('completed').defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
            tbl.string('description', 512).notNullable();
        })
        .createTable('resources_used', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('resources_used');
};
