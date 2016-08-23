#!/usr/bin/env node
const fs = require('fs')
const {Readable, Transform, Writable} = require('stream')

const [,,...cliArgs] = process.argv
const readFileStream = fs.createReadStream(cliArgs[0])

const toUpperCase = Transform()
toUpperCase._transform = (buffer, _, cb) => (
  // console.log('test', buffer.toString().split(' '))
  cb(null, `${buffer.toString().toUpperCase()}`)
)

const writeStream = Writable()
writeStream._write = (buffer, _, cb) => {
  fs.writeFile(cliArgs[1], buffer, (err) => {
    if(err) throw err
  })
  // process.stdout.write(`${buffer.toString()}\n`)
  cb()
}

readFileStream
  .pipe(toUpperCase)
  .pipe(writeStream)
