let assert = require('chai').assert
let zeller = require("../lib/zeller")

describe("zeller",()=>{
	it("should be a function",()=>{
		assert.isFunction(zeller);
	})
	it("should handle missing arguments",()=>{
		assert.strictEqual(zeller(),"Please enter a complete date")
	})
	it("should return a number representing day of the week",()=>{
		assert.strictEqual(zeller(8,30,2016), 2)
	})
	it("should account for leap year",()=>{
		assert.strictEqual(zeller(2,29,2016),1)
	})
	it("should work for a 5 week 31 day month",()=>{
		assert.strictEqual(zeller(6,1,2016),3)
	})
	it("should work for a 5 week 30 day month",()=>{
		assert.strictEqual(zeller(9,1,2016),4)
	})
	it("should work for a 28 day february",()=>{
		assert.strictEqual(zeller(2,1,2016),1)
	})
	it("should work for a 4 week february",()=>{
		assert.strictEqual(zeller(2,1,2015),0)
	})
	it("should work for a 6 week 31 day month",()=>{
		assert.strictEqual(zeller(1,1,2016),5)
	})
	it("should work for a 6 week 30 day month",()=>{
		assert.strictEqual(zeller(11,1,2014),6)
	})
	it("should account for leap centuries",()=>{
		assert.strictEqual(zeller(2,1,2000),2)
	})
	it("should account for non-leap centuries",()=>{
		assert.strictEqual(zeller(2,1,1900),4)
	})

})
