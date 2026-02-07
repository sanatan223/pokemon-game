const pool = require('./pool');
const bcrypt = require('bcryptjs');

async function getAllUsers(){
    const user = await pool.query("SELECT * FROM users;")
    return user.rows
}

async function getUserByName(name){
    const user = await pool.query("SELECT * FROM users WHERE username = $1;", [name])
    return user
}

async function insertUser(name, pass){
    await pool.query("INSERT INTO users(username, password) VALUES($1, $2);", [name, await bcrypt.hash(pass, 10)])
}

async function comparePassword(name, pass){
    const { rows } = await pool.query("SELECT * FROM users WHERE username = $1;", [name]);
    const user = await rows[0];
    const result = await bcrypt.compare(pass, user.password);
    return result;
}

module.exports = { getAllUsers, getUserByName, insertUser, comparePassword }