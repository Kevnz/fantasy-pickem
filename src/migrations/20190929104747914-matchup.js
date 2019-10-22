exports.up = function(knex, Promise) {
  return knex.schema.createTable('matchups', function(table) {
    table.increments('id').primary()
    table.integer('week')

    table.integer('teamAId').references('teams.id')
    table.integer('teamBId').references('teams.id')
    table.integer('winnerId').references('teams.id')
    table.integer('teamAScore')
    table.integer('teamBScore')
    table.datetime('matchupStart')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matchups')
}
