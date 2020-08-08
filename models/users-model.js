const db = require('../data/config')

function find() {
  return db('users')
}

function findBy(username) {
  return db('users')
    .where('users.username', username)
}

function add(user) {
  return db('users')
    .insert(user)
}


module.exports = {
  find,
  findBy,
  add,

}