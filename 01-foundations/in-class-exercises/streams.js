#!/usr/bin/env node
const {Readable, Writable, Transform} = require('stream')
const              {createReadStream} = require('fs')


const readStream = Readable()

// readStream.push('def')
// readStream.push('ghi')
// readStream.push('\n')


//
// setTimeout(() => {
//   readStream.push(null)
// }, 10000)

let i = 0
readStream._read = () => {
  // console.log('read')
  if (i > 100) readStream.push(null)
  else setTimeout(() => readStream.push(`${i++}\n`), 50)
  // else  {i++; setTimeout(() => readStream.push(`${String.fromCharCode( Math.floor(Math.random() * 100 + 30) )}`), 10)}
}

const writeStream = Writable()

writeStream._write = (buf, _, cb) => {
  // console.log('_write',buf.toString())
  process.stdout.write(`${buf}\n`)
  setTimeout(cb, 50)
  // cb()
}

const transformStream = Transform()

transformStream._transform = (buf, _, cb) => {
  cb(null, `${Number(buf) * 2}`)
}

readStream
  .pipe(transformStream)
  .pipe(writeStream)
