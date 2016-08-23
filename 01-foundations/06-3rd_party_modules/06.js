#!/usr/bin/env node
'use strict'

const chalk = require('chalk')
// import chalk from 'chalk'
const starStyle = chalk.white.bgBlue.bold
const redStyle = chalk.bgRed
const whiteStyle = chalk.bgWhite

console.log(starStyle(` *  *  *  *  * ${redStyle('                           ')}`))
console.log(starStyle(` *  *  *  *  * ${whiteStyle('                           ')}`))
console.log(starStyle(` *  *  *  *  * ${redStyle('                           ')}`))
console.log(starStyle(` *  *  *  *  * ${whiteStyle('                           ')}`))
console.log(starStyle(` *  *  *  *  * ${redStyle('                           ')}`))
console.log(starStyle(` *  *  *  *  * ${whiteStyle('                           ')}`))
console.log(starStyle(` *  *  *  *  * ${redStyle('                           ')}`))
console.log(whiteStyle('                                          '))
console.log(redStyle('                                          '))
console.log(whiteStyle('                                          '))
console.log(redStyle('                                          '))
console.log(whiteStyle('                                          '))
console.log(redStyle('                                          '))


























//
// var chalk = require('chalk')
//
// // style a string
// chalk.blue('Hello world!')
//
// // combine styled and normal strings
// chalk.blue('Hello') + 'World' + chalk.red('!')
//
// // compose multiple styles using the chainable API
// chalk.blue.bgRed.bold('Hello world!')
//
// // pass in multiple arguments
// chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz')
//
// // nest styles
// chalk.red('Hello', chalk.underline.bgBlue('world') + '!')
//
// // nest styles of the same type even (color, underline, background)
// chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// )
