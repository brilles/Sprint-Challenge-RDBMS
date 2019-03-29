exports.up = function(knex, Promise) {
  // ONE to MANY relationship between projects and actions
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments(); // unique id
      tbl.string('name', 128).notNullable(); // name
      tbl.text('description').notNullable(); // description
      tbl.boolean('completed').defaultTo(false); // boolean flag default is false
    })
    .createTable('actions', tbl => {
      tbl.increments(); // unique id
      tbl
        .integer('project_id') // FK that points to the PK in projects
        .unsigned()
        .notNullable()
        .references('projects.id');
      tbl.text('description').notNullable(); // description
      tbl.text('notes'); // notes
      tbl.boolean('completed').defaultTo(false); // boolean flag default is false
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions').dropTableIfExists('projects');
};
