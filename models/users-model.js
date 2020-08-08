const db = require('../data/config')

function find() {
  return db('users')
}

function findUsers() {

}


module.exports = {
  find,
  findUsers,
}