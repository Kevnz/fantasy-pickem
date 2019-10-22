exports.up = function(knex, Promise) {
  return knex.schema.createTable('leagues', function(table) {
    table.increments('id').primary()
    table.string('title')
    table.string('weeks')
    table.datetime('startDate')
    table.datetime('endDate')
    table.string('description')
    table.string('sport')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leagues')
}
