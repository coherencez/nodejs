#!/usr/bin/env node
'use strict'
const fs = require('fs')
// console.log(fs)

const [,,...cliArgs] = process.argv

fs.readFile(cliArgs[0], 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
