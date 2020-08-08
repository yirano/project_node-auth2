exports.seed = async function (knex) {
  await knex('users').insert([
    { username: 'user', password: 'password' }
  ])
}