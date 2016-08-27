#!/usr/bin/env node
const {Readable, Writable, Transform} = require('stream')
const              {createReadStream} = require('fs')


// const readStream = createReadStream('names.txt', { highWaterMark: 1})
//
//
// readStream.on('data', (buf) => {
//   // console.log('data')
//   readStream.pause()
//   process.stdout.write(buf.toString())
// })
// const timer = setInterval(() => readStream.resume(), 50)
// readStream.on('end', () => {
//   console.log('end')
//   clearInterval(timer)
// })

const readline = require('readline');

let i = 0;
let x = '='

setInterval(() => {
  // readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, i);
  if(i < 100)process.stdout.write(`=> ${i++}%`);
}, 200);


// readStream.pipe(process.stdout)
