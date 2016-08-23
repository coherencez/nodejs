#!/usr/bin/env node

const versions = process.versions
const [, node, v8, ...rest] = Array.from(Object.keys(versions))
console.log(`Node.js version: ${versions[node]}\nV8 version: ${versions[v8]}`)
