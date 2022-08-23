const asyncHandler = require('express-async-handler')
const Pokemon = require('../models/pokeModel')

// @desc     Get pokemons
// @route    GET /pokemon
const getPokemons = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.find()

  res.status(200).json(pokemons)
})

// @desc     Get pokemons
// @route    GET /pokemon/:name
const getPokemonName = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.findOne({ "name": req.params.name })
  if (!pokemons) {
    res.status(404)
    throw new Error('Pokemon not exists')
  }

  res.status(200).json(pokemons)
})

// @desc     Get pokemons type
// @route    GET /pokemon/type/:type
const getPokemonType = asyncHandler(async (req, res) => {
  const pokemonstype = await Pokemon.find({ "type": req.params.type })
  if (!pokemonstype) {
    res.status(404)
    throw new Error('Pokemon not exists')
  }

  res.status(200).json(pokemonstype)
})

// @desc     Set pokemon
// @route    POST /pokemon
const setPokemon = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.type || !req.body.hp || !req.body.attack || !req.body.defense || !req.body.speed) {
    res.status(400)
    // throw new Error('Please add all poke fields')
  }

  const pokemons = await Pokemon.exists({ "name": req.body.name })
  if (pokemons) {
    res.status(400)
    throw new Error('Pokemon already exists')
  }

  const pokemon = await Pokemon.create({
    name: req.body.name,
    type: req.body.type,
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    speed: req.body.speed
  })

  res.status(201).json(pokemon)
})

// @desc     Update information pokemon
// @route    PATCH /pokemon/:name
const updateSomePokemon = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.findOne({ "name": req.params.name })
  if (!pokemons) {
    res.status(400)
    throw new Error('Pokemon not exists')
  }

  if (!req.body.hp || !req.body.speed) {
    res.status(400)
    throw new Error('Pokemon stats missing')
  }

  const updateSomePokemon = await Pokemon.findOneAndUpdate({ "name": req.params.name }, { hp: req.body.hp, speed: req.body.speed }, {
    new: true,
  })


  res.status(200).json(updateSomePokemon)
})

// @desc     Update pokemon
// @route    PUT /pokemon/:name
const updatePokemon = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.findOne({ "name": req.params.name })
  if (!pokemons) {
    res.status(400)
    throw new Error('Pokemon not exists')
  }

  type = ["normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark", "fairy"]
  if (!type.includes(req.body.type)) {
    res.status(400)
    throw new Error('Type not exists')
  }

  if (req.params.name !== req.body.name) {
    res.status(400)
    throw new Error('Pokemons name is diff')
  }

  const updatePokemon = await Pokemon.findOneAndUpdate(req.params.name, req.body, {
    new: true,
  })

  res.status(200).json(updatePokemon)
})

// @desc     Delete pokemon
// @route    DELETE /pokemon/:name
const deletePokemon = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.findOne({ "name": req.params.name })
  if (!pokemons) {
    res.status(400)
    throw new Error('Pokemon not exists')
  }

  await pokemons.remove()
  
  res.status(200).json(pokemons)
})

module.exports = {
  getPokemons,
  getPokemonName,
  getPokemonType,
  setPokemon,
  updateSomePokemon,
  updatePokemon,
  deletePokemon
}