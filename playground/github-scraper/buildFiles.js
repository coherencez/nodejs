'use strict'
const fs = require('fs')

module.exports = (obj) => {
	fs.writeFile('day.json',JSON.stringify(obj.day), (err) => {if(err) throw err})
	fs.writeFile('week.json',JSON.stringify(obj.week), (err) => {if(err) throw err})
	fs.writeFile('month.json',JSON.stringify(obj.month), (err) => {if(err) throw err})
}