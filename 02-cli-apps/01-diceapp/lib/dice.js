'use strict'
const {randomInt} = require('./math')

const dice = {

  toDiceNotation: (obj) => {
    return `${obj.count}d${obj.sides}`
  },

  roll: (str) => {
    let arr = str.split('d'),
    counter = 0
    while (counter < arr[0]) {
      console.log(randomInt(arr[1]))
      counter++
    }
    return;
  }
}



module.exports = dice
