#!/usr/bin/env node
'use strict'
const [,,...cliArgs] = process.argv
const sum = Array.from(cliArgs)
              .map(x => parseFloat(x))
              .reduce( (prev, curr) => prev + curr )

console.log(sum)

// const arr = [-.42, 0, 3.14].reduce((prev, curr) => prev + curr)

// console.log(arr)
