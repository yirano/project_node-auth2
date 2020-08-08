
exports.up = async function (knex) {
  await knex.schema.createTable('users', table => {
    table.increments()
    table.text('username').notNull().unique()
    table.text('password').notNull()
    table.text('department').default('administration')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users')
}
