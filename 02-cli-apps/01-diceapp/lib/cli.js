'use strict'
// modules
const {toDiceNotation, roll} = require('./dice'),
                   parseArgs = require('./parse-args'),
              [,,...cliArgs] = process.argv

// function calls
const    parsedArgsObj = parseArgs(...cliArgs),
    diceNotationString = toDiceNotation(parsedArgsObj)
            //, rollResult = roll(diceNotationString)
            //, result = roll(toDiceNotation(parseArgs(...cliArgs)))

roll(diceNotationString)
// console.log(rollResult)
// console.log(result)
