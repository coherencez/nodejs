#!/usr/bin/env node
'use strict'

const    chalk = require('chalk')
  ,    magenta = chalk.magenta
  ,        red = chalk.red
  ,       blue = chalk.blue
  ,       grey = chalk.grey
  ,      white = chalk.white

const http = require('http')
// console.log(http.toString())
//
//
// for (let x in http) {
//   let keyValToString = http[x].toString()
//    ,  magentaKey = `${magenta(x)}: `
//    , slicedString = (keyValToString.length > 100)
//                     ? keyValToString.slice(0,99) + white('...')
//                     : keyValToString
//    , greyKeyVal = grey(slicedString)
//    console.log(magentaKey, greyKeyVal)
//   // console.log(magenta(x) + ': ', grey(http[x].toString().slice(0,100) + '...'))
// }


// function foo (...args) {
//   let [...args] = arguments
//   args.forEach(v => console.log(v))
// }
//
// foo(http, chalk)
