#!/usr/bin/env node --harmony_destructuring

// const versions = process.versions
// const vArr = Array.from(Object.keys(versions))
// // console.log(versions)
// // console.log(vArr)
// // const [, node, v8, ...rest] = Array.from(Object.keys(versions))
// console.log(`Node.js version: ${versions[vArr[1]]}\nV8 version: ${versions[vArr[2]]}`)
const {node, v8} = process.versions
console.log(node, v8)

// const versions = process.versions
// const [, node, v8, ...rest] = Array.from(Object.keys(versions))
console.log(`Node.js version: ${node}\nV8 version: ${v8}`)
