const   test = require('tape')
const {exec} = require('child_process')

test('cal', t => {
	exec('bin/node-cal', (err, stdout) => {
	  exec('cal', (err2, stdout2) => {
	    t.strictEqual(stdout, stdout2)
	    t.end()
	  })
	})
})

let {getToday,today,date} = {getToday: (a,b,c) => ({a,b,c}), today: 'two', date:'three'}
test('#getToday()', t => {
	t.ok(date, 'date should be defined')
	t.ok(today, 'today should be defined')
	t.equal(typeof getToday, 'function', 'getToday should be a function')
	t.strictEqual(Object.keys(getToday(1,2,3)).length,3,'should return an object with 3 properties')
	t.strictEqual(getToday().day,new Date().getDate(),'should return an object the current day of the month')
	t.strictEqual(getToday().month,new Date().getMonth() + 1,'should return an object with the current month')
	t.strictEqual(getToday().year,new Date().getFullYear(),'should return an object with the current year')
	t.end()
})

let {getMonths,getMonth,getDays,
	getDay,getMonthLengths,getDaysInMonth,
	dayTrimmer,centerString, addPadding, getRange}=require('../lib/stringFormat');
test('#getMonths()', t => {
	t.equal(typeof getMonths, 'function')
	t.equal(typeof getMonth, 'function')
	t.equal(typeof getMonths(), 'object')
	t.deepEqual(getMonth(0), 'January')
	t.end()
})
test('#getDays()', t => {
	t.equal(typeof getDays, 'function')
	t.equal(typeof getDays(), 'object')
	t.equal(typeof getDay, 'function')
	t.deepEqual(getDay(0), 'Sunday')
	t.end()
})
test('getDaysInMonth', t => {
	t.equal(typeof getDaysInMonth, 'function')
	t.deepEqual(getDaysInMonth(getMonth(0)),31)
	t.end()
})
test('dayTrimmer', t => {
	t.equal(typeof dayTrimmer, 'function')
	t.deepEqual(dayTrimmer("Monday"),"Mo")
	t.end()
})
test('#centerString()', t => {
	t.equal(typeof centerString, 'function')
	t.strictEqual(centerString("foo",5)," foo ", 'should center a string based on width')
	t.strictEqual(centerString("foo",6)," foo  ", 'should be left Leaning')
	t.end()
})
test('#addPadding()', t => {
	const testString = 'Hello from space'
	,      padding = 5
	,         side = 'left'

	t.equal(typeof addPadding, 'function')
	t.equal(addPadding.length, 3, 'should take 3 arguments')
	t.strictEqual(typeof addPadding(testString, padding, side), 'string', 'should return a string')
	t.strictEqual(addPadding(testString, padding, side), '     Hello from space', 'should add correct amount of padding')
	t.end()
})
test('#getRange()', t => {
	t.equal(typeof getRange, 'function')
	t.deepEqual(getRange(5), [1,2,3,4,5], 'should contain all ints up to passed argument')
	t.end()
})

let zeller = require("../lib/zeller")
test('zeller', t => {
	t.strictEqual(zeller(),"Please enter a complete date", 'should handle missing arguments')
	t.strictEqual(zeller(8,30,2016), 2, 'should return a number representing day of the week')
	t.strictEqual(zeller(2,29,2016),1, 'should account for leap year')
	t.strictEqual(zeller(6,1,2016),3, 'should work for a 5 week 31 day month')
	t.strictEqual(zeller(9,1,2016),4, 'should work for a 5 week 30 day month')
	t.strictEqual(zeller(2,1,2016),1, 'should work for a 28 day february')
	t.strictEqual(zeller(2,1,2015),0, 'should work for a 4 week february')
	t.strictEqual(zeller(1,1,2016),5, 'should work for a 6 week 31 day month')
	t.strictEqual(zeller(11,1,2014),6, 'should work for a 6 week 30 day month')
	t.strictEqual(zeller(2,1,2000),2, 'should account for leap centuries')
	t.strictEqual(zeller(2,1,1900),4, 'should account for non-leap centuries')
	t.end()
})












