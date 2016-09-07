let {isFunction,strictEqual,isArray, equal, deepEqual} = require('chai').assert
let {getMonths,getMonth,getDays,
	getDay,getMonthLengths,getDaysInMonth,
	dayTrimmer,centerString, addPadding, getRange}=require('../lib/stringFormat');

describe('getMonths',()=>{
	it("should be a function",()=>{
	   isFunction(getMonths)
	})
	it("should return an array of month names",()=>{
		isArray(getMonths())
	})
})
describe('getMonth',()=>{
	it("should be a function",()=>{
		isFunction(getMonth)
	})
	it("should return a month name based on the number",()=>{
		strictEqual(getMonth(0),"January");
	})
})

describe('getDays',()=>{
	it("should be a function",()=>{
		isFunction(getDays)
	})
	it("should return an array of day names",()=>{
		isArray(getDays())
	})
})
describe('getDay',()=>{
	it("should be a function",()=>{
		isFunction(getDay)
	})
	it("should return a day name based on the number",()=>{
		strictEqual(getDay(0),"Sunday");
	})
})

describe('getDaysInMonth',()=>{
	it("should be a function",()=>{
		isFunction(getDaysInMonth)
	})
	it("should return the amount of days for the month passed",()=>{
		strictEqual(getDaysInMonth(getMonth(0)),31)
	})
})

describe('dayTrimmer',()=>{
	it("should be a function",()=>{
		isFunction(dayTrimmer)
	})
	it("should return the first two letters of a passed string",()=>{
		strictEqual(dayTrimmer("Monday"),"Mo")
	})
})

describe('#centerString()',()=>{
	it("should be a function",()=>{
		isFunction(centerString)
	})
	it("should add padding to a string based on width",()=>{
		strictEqual(centerString("foo",5)," foo ");
	})
	it("should be left Leaning",()=>{
		strictEqual(centerString("foo",6)," foo  ");
	})
})

describe('#addPadding()', () => {
	const testString = 'Hello from space'
		,      padding = 5
		,         side = 'left'

	it('should be a function', () => {
		strictEqual(typeof addPadding, 'function')
	})
	it('should take 3 arguments', () => {
		strictEqual(addPadding.length, 3)
	})
	it('should return a string', () => {
		strictEqual(typeof addPadding(testString, padding, side), 'string')
	})
	it('should add correct amount of padding', () => {
		strictEqual(addPadding(testString, padding, side), '     Hello from space')
	})
})

describe('#getRange()',()=>{
	it("should be a function",()=>{
		isFunction(getRange)
	})
	it("should return an array",()=>{
		isArray(getRange(10))
	})
	it("should contain all ints up to passed argument",()=>{
		deepEqual(getRange(5), [1,2,3,4,5])
	})
})
