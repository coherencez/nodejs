'use strict'

// THIRD PARTY MODULES
const Express = require('express')
	,		  fetch = require('node-fetch')
	,			chalk = require('chalk')

// PROJECT MODULES
	,    scrape = require('./scrape')
	,	parseData = require('./parseData')
	,buildFiles = require('./buildFiles')

// PROJECT VARS
	,[,,...args] = process.argv
	,   cliFlags = args.filter(v => v.charAt(0) === '-')
	,    cliArgs = args.filter(v => v.charAt(0) !== '-')
	,			  port = process.env.PORT || 8080
	, 			 app = Express()
	,				 uri = 'https://github.com/tkswann2'

app.set('port', port)
console.log(cliFlags.includes('-s'));
// MIDDLEWAREZ
// log time stamp, request, and user-agent info to terminal for every request
app.use((req, res, cb) => {
	console.log(`[${Date()}]`, chalk.cyan(`${req.method} ${req.url}`), req.headers['user-agent'])
	cb()
})

app.get('/', (req,res) => {
	fetch(uri)
		.then(html 		=> html.text())
		.then(body 		=> scrape(body))
		.then(arr  		=> parseData(arr))
		.then(dataObj => {
			if(cliFlags.includes('-s')) buildFiles(dataObj)
			if(cliFlags.includes('-w')) res.send('<h1>We\'re on our way to a pug layout bitch</h1>')
		})

})

app.listen(port, () => {
	console.log(`Now listening on port ${port}`)
})

