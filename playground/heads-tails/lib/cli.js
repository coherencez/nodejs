'use strict'


;(Math.round(Math.random()) === 1 )
  ? console.log('heads')
  : console.log('tails')





/* 'unit test' to make sure the rng is truly 50/50 */

// const resultArr = []
//
// for (let i = 0; i < 100000; i++) {
//   ;(Math.round(Math.random()) === 1 )
//     ? resultArr.push('heads')
//     : resultArr.push('tails')
// }
//
// let headsArr = resultArr.filter(v => v === 'heads')
// let tailsArr = resultArr.filter(v => v === 'tails')
//
// console.log('heads:', headsArr.length, 'tails:', tailsArr.length)
