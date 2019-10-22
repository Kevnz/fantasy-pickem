exports.up = function(knex, Promise) {
  return knex.schema.createTable('picks', function(table) {
    table.increments('id').primary()

    table.integer('matchupId').references('matchups.id')
    table.integer('userId').references('users.id')
    table.integer('teamPickedId').references('teams.id')
    table.boolean('final')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('picks')
}
