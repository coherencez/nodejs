'use strict'
// THIRD PARTY MODULES
const express = require('express')
  ,     fetch = require('node-fetch')
  ,     chalk = require('chalk')
// PROJECT MODULES
  ,    scrape = require('./scrape')
  , parseData = require('./parseData')
  ,buildFiles = require('./buildFiles')
// PROJECT VARS
  ,[,,...args] = process.argv
  ,   cliFlags = args.filter(v => v.charAt(0) === '-')
                        .map(v => v.slice(v.lastIndexOf('-')))
                        .map(v => v.slice(1,v.length))
  ,    cliArgs = args.filter(v => v.charAt(0) !== '-')
  ,       port = process.env.PORT || 8080
  ,        app = express()
  ,        uri = `https://github.com/${cliArgs[0]}`


function exit () {
  console.log(`\nFiles have been saved in ${__dirname}\nGood Bye`)
  setTimeout(() => {
    process.exit(-1)  
  }, 1000)
}

app.set('port', port)
app.set('view engine', 'pug')
// MIDDLEWAREZ
// set public folder for static access
app.use(express.static('public'))
// log time stamp, request, and user-agent info to terminal for every request
app.use((req, res, cb) => {
  console.log(`[${Date()}]`, chalk.cyan(`${req.method} ${req.url}`), req.headers['user-agent'])
  cb()
})

fetch(uri)
  .then(html    => html.text())
  .then(body    => scrape(body))
  .then(arr     => parseData(arr))
  .then(dataObj => {
    const {day, week, month} = dataObj
    if(cliFlags.includes('s')) {buildFiles(dataObj); exit()}
    if(cliFlags.includes('w')) {
      app.get('/', (req,res) => {
        res.render('index',{name: `${cliArgs[0]}`, day, week, month })
     })
    }
  })

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})

