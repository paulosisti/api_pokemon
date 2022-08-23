const express = require('express')
const router = express.Router()
const {
  getPokemons,
  getPokemonName,
  getPokemonType,
  setPokemon,
  updateSomePokemon,
  updatePokemon,
  deletePokemon
} = require('../controllers/pokeController')

router
.get('/', getPokemons)
.get('/api/type/:type', getPokemonType)
.get('/:name', getPokemonName)
.post('/', setPokemon)
.put('/:name', updatePokemon)
.patch('/:name', updateSomePokemon)
.delete('/:name', deletePokemon)
// .route('/').get(getPokemons).post(setPokemon)
// .route('/type/:type').get(getPokemonType)
// .route('/:name').get(getPokemonName).patch(updateSomePokemon).put(updatePokemon).delete(deletePokemon)

module.exports = router