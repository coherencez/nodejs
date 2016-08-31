'use strict'

const parseArgs = (cli1, cli2) => {
  return {
    count: cli1,
    sides: cli2
  }
}

module.exports = parseArgs
