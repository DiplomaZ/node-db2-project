const db = require("../database");
module.exports = {
  find,
  findById,
  remove,
  editById,
  update,
  insert,
};
function find() {
  return db("cars");
}
function findById(id) {
  id = Array.isArray(id) ? [id] : id;
  return db("cars")
    .where({ id })
    .first()
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
}

function remove(id) {
  return db("cars").where({ id }).del();
}
function editById(id, update) {
  return db("cars").where({ id }).update(update, "*");
}

function update(id, changes) {}
function insert(car) {
  return db("cars")
    .insert(car)
    .then((ids) => {
      return findById(ids[0]);
    });
}
