const db = require("../data/config");

function getAll() {
  return db("users");
}

function findBy(username) {
  return db("users").where("users.username", username);
}

function getStudents() {
  return db("users")
    .select(
      "users.username as student",
      "users.department as department",
      "users.role as role"
    )
    .where("users.role", "student");
}

function getDepartment(dept) {
  return db("users")
    .select(
      "users.username as student",
      "users.department as department",
      "users.role as role"
    )
    .where("users.department", dept);
}

function add(user) {
  return db("users").insert(user);
}

module.exports = {
  getAll,
  findBy,
  add,
  getStudents,
  getDepartment,
};
