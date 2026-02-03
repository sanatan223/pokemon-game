const pool = require('./pool')

async function getAllUsers(){
    const user = await pool.query("SELECT * FROM users;")
    return user.rows
}

async function getUserByName(name){
    const user = await pool.query("SELECT * FROM users WHERE username = $1;", [name])
    return user
}

async function insertUser(name, pass){
    const user = await pool.query("INSERT INTO users(username, password) VALUES($1, $2);", [name, pass])
    console.log("User inserted");
}

module.exports = { getAllUsers, getUserByName, insertUser }