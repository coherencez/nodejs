const {Should, assert} = require('chai')

const {randomInt} = require('../lib/math');


describe('Math', function() {
	describe('rng()', function() {
		it('should be a rnd num from 1 to 6', function() {
			assert.equal(3, randomInt(3))
		})
	})
})

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.deepEqual(-1, [1,2,3].indexOf(4));
//     });
//   });

//   describe('#includes()', function() {
//   	it('should return true if value is present', function() {
//   		assert.deepEqual(true, [1,2,3].includes(3))
//   	})
//   })

//   describe('#includes()', function() {
//   	it('should return false if value is not present', function() {
//   		assert.notDeepEqual(true, [1,2,3].includes(4))
//   	})
//   })
// });