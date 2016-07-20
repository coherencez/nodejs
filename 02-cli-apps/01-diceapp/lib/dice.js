'use strict'
const {randomInt} = require('./math')

const dice = {

  toDiceNotation: (obj) => {
    return `${obj.count}d${obj.sides}`
  },

  roll: (str) => {
    let arr = str.split('d'),
    counter = 0
    if(str === 'undefineddundefined') {
      console.log(randomInt())
    } else {
      while (counter < arr[0]) {
        console.log(randomInt(arr[1]))
        counter++
      }
    }
  }
}



module.exports = dice
