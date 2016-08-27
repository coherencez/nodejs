#!/usr/bin/env node
'use strict'
// modules
const {Readable, Transform, Writable} = require('stream')
const                           {get} = require('http')
const                              fs = require('fs')
// const chalk = require('chalk')

// vars
const [,,...cliArgs] = process.argv
// const      starStyle = chalk.white.bgBlue.bold

// functions
// const getQueryString = (symbol) => {
//
//   let baseURL = "http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters="
//   let parameters = {
//     "Normalized": false,
//     "NumberOfDays": 365,
//     "DataPeriod": "Day",
//     "Elements": [
//       {
//         "Symbol": symbol.toUpperCase(),
//         "Type": "price",
//         "Params":["c"]
//       }
//     ]
//   }
//   let queryURL = baseURL + JSON.stringify(parameters)
//
//   // console.log(queryURL)
//
//   return queryURL
// }

const initialURL = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters='

const passedParams = {
    "Normalized": false,
    "NumberOfDays": 365,
    "DataPeriod": "Day",
    "Elements":[{
      "Symbol": cliArgs[0],
      "Type":"price",
      "Params":["c"]
    }]
  }

const url= initialURL + JSON.stringify(passedParams)


const      lineBreak = new Transform({
  transform(buffer, _, cb) {
    let stringArr = buffer.toString().split(','),
      writeString = ''
        stringArr.forEach((v, i) => {
          if(i !== stringArr.length - 1) writeString += `${v},\n`
          else writeString += `${v}`
        })
    cb(null, writeString)
  }
})
const    writeStream = Writable()
writeStream._write = (buffer, _, cb) => {
  fs.appendFile(cliArgs[1], buffer, (err) => {
    if(err) throw err
  })
  // process.stdout.write(`${buffer.toString()}\n`)
  cb()
}


// const readStream = fs.createReadStream('test.json')
// readStream
//   .pipe(lineBreak)
//   .pipe(writeStream)

// const query = getQueryString(cliArgs[0])

get(url, (res) => {
  res.setEncoding("utf8")


  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {

    let        stockPrices = data /*JSON.parse(data),*/
    console.log('TEST DATA',stockPrices)
        // {Elements, Labels} = stockPrices,
        //       {DataSeries} = Elements[0],
        //            {close} = DataSeries,
        //           {values} = close



              //  stockPrices = values
    //            console.log(stockPrices.length)
    // let total = (stockPrices.reduce((prev, cur) => prev + cur)) / stockPrices.length
    // console.log(`$${total.toFixed(2)}`)
  })

  res.resume()
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`)
})
