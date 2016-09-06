'use strict'
const {randomInt} = require('./math')

const dice = {

  toDiceNotation: (obj) => {
    return `${obj.count}d${obj.sides}`
  },

  roll: (str) => {
    let counter = 0,
            arr = str.split('d')
    // if(str === 'undefineddundefined') {
    //   console.log(randomInt())
    // } else {
    //   while (counter < arr[0]) {
    //     console.log(randomInt(arr[1]))
    //     counter++
    //   }
    // }
    return arr
  }
}



module.exports = dice
