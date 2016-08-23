const [,,...args] = process.argv
const allCaps = args.map(arg => arg.toUpperCase())
const aOrAn = char => /[aeiouhflxnsr]/ig.test(char) ? 'an' : 'a'

let timeout = -1000
// all produce same result
// args.filter(args => { args.split('').forEach(x => console.log(x)) })
// args.filter(args => { Array.from(args).forEach(x => console.log(x)) })
[...allCaps.join('')].forEach(args => { 
	setTimeout(() => {
	 console.log(`Give me ${aOrAn(args)} ${args}!`) 
	}, timeout += 1000)
})

if (args.length > 0) setTimeout(() => {
	console.log(`\nWhat's that spell?\n`)
	console.log(`${allCaps.join(' ')}!`)
}, timeout + 1000)

