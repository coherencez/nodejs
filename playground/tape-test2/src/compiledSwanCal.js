//test for output to be equal to output of cal
const                         {exec} = require('child_process')
  , { assert: {oneOf, strictEqual} } = require('chai')
  ,                         getToday = require('../lib/getToday')
  ,                           zeller = require('../lib/zeller')


describe('cal', () => {

  it('should match unix cal app', (cb) => {
    exec('bin/node-cal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it.skip('should notify user when date is out of range', (cb) => {
  	exec('bin/node-cal 10000', (err, stdout, stderr) => {
  		exec('cal 10000', (err2, stdout2, stderr2) => {
  			strictEqual(stdout, stdout2)
  			strictEqual(stderr, stderr2)
  			cb()
  		})
  	})
  })

  it.skip('should notify user when date is out of range', (cb) => {
  	exec('bin/node-cal 1753', (err, stdout, stderr) => {
  		exec('cal 1753', (err2, stdout2, stderr2) => {
  			strictEqual(stdout, stdout2)
  			strictEqual(stderr, stderr2)
  			cb()
  		})
  	})
  })

  describe('cli args', () => {
  	describe('if no args are passed', () => {

  		it('should show no args', () => {
				strictEqual(process.argv.length, 2)
  		})

  		it('getToday should return object', () => {
				strictEqual('object', typeof getToday)
  		})

  	})

    describe('if args are passed', () => {

      it('should accept 2 arguments corresponding to a month and year', (cb) => {
        exec('bin/node-cal oct 2016', (err, stdout, stderr) => {
          exec('cal oct 2016', (err2, stdout2, stderr2) => {
            strictEqual(stdout, stdout2)
            strictEqual(stderr, stderr2)
            console.log("stdout:", stdout);
            console.log("stdout:", stdout2);
            cb()
          })
        })
      })

    })

  })

})


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
    isFunction(getMonths)
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
