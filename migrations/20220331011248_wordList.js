exports.up = function (knex) {
  return knex.schema.createTable('wordList', (table) => {
    table.increments('id').primary()
    table.string('word')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('wordList')
}
