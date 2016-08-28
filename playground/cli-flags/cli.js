#!/usr/bin/env node
'use strict'
const     {argv} = process,
	[,,...cliArgs] = argv,
			[...flags] = cliArgs.filter(v => v.slice(0,1) === '-'),
			 [...args] = cliArgs.filter(v => v.slice(0,1) !==	 '-')


const randomInt = (max, min) => {
  // min = Math.ceil(min) || 1
  min = 1
  max = Math.floor(max) || 6
  return Math.floor(Math.random() * (max - min + 1)) + min
}


if (args.includes('coin')) {

	if(flags.includes('-m')) {
		for (var i = args[1]; i >= 0; i--) {
			;(Math.round(Math.random()) === 1 )
			  ? console.log('heads')
			  : console.log('tails')
		}
	} else if (flags.includes('-t')) {
		const resultArr = []

		for (let i = 0; i < 100000; i++) {
		  ;(Math.round(Math.random()) === 1 )
		    ? resultArr.push('heads')
		    : resultArr.push('tails')
		}

		let headsArr = resultArr.filter(v => v === 'heads'),
		    tailsArr = resultArr.filter(v => v === 'tails')

		console.log('heads:', headsArr.length, 'tails:', tailsArr.length)
	} else {
		;(Math.round(Math.random()) === 1 )
			  ? console.log('heads')
			  : console.log('tails')
	}

} else if (args.includes('dice')) {

	if(flags.includes('-m')) {
		for (var i = args[1]; i > 0; i--) {
			console.log(randomInt(args[2], args[1]))
		}
	} else {
		console.log(randomInt())
	}

} else {
	console.log('Usage: [coin, dice] [-m, -t] [opts]\n\nFlags:\n -m: run multiple times, accepts integers as input\n -t: coin only. Run tests to see distributed pattern on 100k flips\n\nOpts:\n *for use with \'-m\' flag\n single int for number of coin flips (e.g. 10)\n two ints for dice, 1) number of die, 2) number\n of sides per die (e.g. 2 20)')
}
