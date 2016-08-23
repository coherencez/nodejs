'use strict'
// modules
const {toDiceNotation, roll} = require('./dice'),
                   parseArgs = require('./parse-args'),
              [,,...cliArgs] = process.argv

// function calls
const    parsedArgsObj = parseArgs(...cliArgs),
    diceNotationString = toDiceNotation(parsedArgsObj)
                         roll(diceNotationString)
            // rollResult = roll(diceNotationString)
            //, result = roll(toDiceNotation(parseArgs(...cliArgs)))


// console.log(rollResult)
// console.log(result)
