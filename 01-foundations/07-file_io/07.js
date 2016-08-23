#!/usr/bin/env node
'use strict'

const fs = require('fs')
// console.log(fs)

const [,,...cliArgs] = process.argv
let test = cliArgs.toString()

if (cliArgs.length !== 0) {

  let file = fs.readFileSync(test, 'utf8')
    console.log(file)

}
