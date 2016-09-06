const express = require('express')
	,       app = express()

app.on('request', (res, req) => {
	console.log("hello");
	console.log("req", req);
})

app.get('/', (req,res) => {
	res.send('hello')
})



app.get('/about', (req,res) => {
	res.send('<h2>Hell from the about page</h2>')
})


app.listen(process.env.PORT || 3000)