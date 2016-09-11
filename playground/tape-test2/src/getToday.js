'use strict';
let assert =require('chai').assert;
let {getToday,today,date} = require('../lib/getToday')
describe('getToday',()=>{
	it("should be a function",()=>{
		assert.isFunction(getToday)
	})
	it("should have a variable for new Date",()=>{
		assert.isDefined(date);
	})
	it("should have an object that represents the current Date",()=>{
		assert.isDefined(today)
	})
	it("should return an object with 3 properties",()=>{
		assert.strictEqual(Object.keys(getToday()).length,3);
	})
	it("should return an object the current day of the month",()=>{
		assert.strictEqual(getToday().day,new Date().getDate());
	})
	it("should return an object with the current month",()=>{
		assert.strictEqual(getToday().month,new Date().getMonth() + 1);
	})
	it("should return an object with the current year",()=>{
		assert.strictEqual(getToday().year,new Date().getFullYear());
	})

})
