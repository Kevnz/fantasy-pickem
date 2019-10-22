exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('leagueId').references('leagues.id')
    table.string('location')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
}
