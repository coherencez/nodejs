const               {assert} = require('chai')
const {toDiceNotation, roll} = require('../lib/dice')

describe('Testing', function() {
  describe('dice lib', function() {
    it('should return sring with dice notation', function() {
      const testObj = {
        count: 2,
        sides: 10
      }
      const expected = '2d10'
      assert.equal(expected, toDiceNotation(testObj))
    })

    it('should return array', function() {
      const string =  '2d10'
      const expected = ['2', '10']

      assert.equal(roll(string), expected)
    })
  })
})
