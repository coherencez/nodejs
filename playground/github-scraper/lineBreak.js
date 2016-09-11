'use strict'
const {Readable, Writable, Transform} = require('stream')

const      lineBreak = new Transform({
  transform(buffer, _, cb) {
    let stringArr = buffer.toString().split(','),
      writeString = ''
        stringArr.forEach((v, i) => {
          if(i !== stringArr.length - 1) writeString += `${v},\n`
          else writeString += `${v}`
        })
    cb(null, writeString)
  }
})