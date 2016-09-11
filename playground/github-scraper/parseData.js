'use strict'

module.exports = (array) => {
	// remove tomorrow's date (null data) from array
	array.length = array.length - 1
	// split data into corresponding array name by length
	let day, week, month, length = array.length
	  day = array.slice(length - 1)
	 week = array.slice(length - 7)
	month = array.slice(length - 31)
	return {
		day, week, month
	}
}