const mongoose = require('mongoose')

const pokeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for your pokemon']
  },
  type: {
    type: String,
    required: [true, 'Please add a type for your pokemon'],
    enum: ["normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark", "fairy"]
  },
  hp: {
    type: Number,
    required: [true, 'Please add hp for your pokemon']
  },
  attack: {
    type: Number,
    required: [true, 'Please add attack for your pokemon']
  },
  defense: {
    type: Number,
    required: [true, 'Please add defense for your pokemon']
  },
  speed: {
    type: Number,
    required: [true, 'Please add speed for your pokemon']
  },
  __v: { 
    type: Number, 
    select: false 
  },
  _id: { 
    type: Number, 
    select: false 
  }
})

module.exports = mongoose.model('Pokemon', pokeSchema)