const db = require("./dbConfig");

module.exports = {
  register,
  login,
  findById
};

function register(user) {
    return db('users')
    .insert(user)
    .then(ids => {
       const [id] = ids;
        return findById(id);
    })
} 
function login(user) {
    return db("users").where(user);

} 
function findById(id) {
 return db('users')
 .select('id', 'username')
 .where({id})
 .first()
}
