const {Should, assert} = require('chai')

const {parseArgs} = require('../lib/dice')
	, [,,...args] = process.argv


describe('Dice obj', function() {
	describe('parseArgs()', function() {

		it('be an object ', function() {
			assert.equal('object', typeof parseArgs(5, 20))
		})

		it('return obj with 2 keys, count && sides ', function() {
			assert.equal(`${{count: 5, sides: 20}}`, parseArgs(5, 20))
		})

		it('accept cli arguments ', function() {
			assert.equal(`${{count: 'hello', sides: 'from cli'}}`, parseArgs(args[0], args[1]))
		})

	})
})
