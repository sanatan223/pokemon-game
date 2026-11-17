import express from 'express';
import { addPokemonToUser, getUserPokemon } from '../database/query.js';
import { ensureAuthenticated } from '../middleware/authMiddleware.js';

const userPokemonRouter = express.Router();


userPokemonRouter.use(ensureAuthenticated);

userPokemonRouter.get('/:id', async (req, res) => {
    try {
        const user_id = req.params.id;
        const pokemons = await getUserPokemon(user_id);
        res.status(200).json(pokemons);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

userPokemonRouter.post('/', async (req, res) => {
    try {
        const { pokemon_id, user_id } = req.body;
        await addPokemonToUser(user_id, pokemon_id);
        res.status(200).json({ message: 'Pokemon added to user inventory' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export { userPokemonRouter };