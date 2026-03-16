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

async function addPokemonToUser(user_id, poke_id){
    await pool.query("INSERT INTO user_pokemon (user_id, pokemon_id) VALUES($1, $2);", [user_id, poke_id])
}

async function getUserPokemon(user_id){
    const { rows } = await pool.query("SELECT pokemon_id FROM user_pokemon WHERE user_id = $1;", [user_id]);
    return rows;
}

module.exports = { getAllUsers, getUserByName, insertUser, comparePassword, addPokemonToUser, getUserPokemon }