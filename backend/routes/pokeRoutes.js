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

router.route('/').get(getPokemons).post(setPokemon)
router.route('/:name').get(getPokemonName).patch(updateSomePokemon).put(updatePokemon).delete(deletePokemon)
router.route('/type/:type').get(getPokemonType)

// router.get('/', getPokemons)
// router.get('/:name', getPokemonName)
// router.post('/', setPokemon)
// router.put('/:name', updatePokemon)
// router.patch('/:name', updateSomePokemon)
// router.delete('/:name', deletePokemon)

module.exports = router