const { createServer } = require('http')
const { get } = require('https')
const { readFile, readdir } = require('fs')

const server = createServer()

server.on('request', ({url}, res) => {
  // readFile(req.url.slice(1), 'utf8')
  const path = url.slice(-1) === '/'
 ? url.slice(1).concat("index.html")
 : url.slice(1)

  readFile(path, (err, data) => {
    if (err) {
      res.statusCode = 404
      res.end('Not Found\n')
    }
    res.end(data)
  })


  // get('https://node-http.firebaseio.com/words.json', (res) => {
  //   let raw = ''
  //
  //   res.on('data', (buff) => {
  //     raw += buff.toString()
  //   })
  //
  //   res.on('end', () => {
  //     response.end(JSON.stringify(JSON.parse(raw).slice(0, 10)))
  //   })
  // })

  // readFile('index.html', (err, buff) => {
  //   res.end(buff)
  // })
})

server.listen(3000)

// const {get} = require('https')

// get('https://node-http.firebaseio.com/words.json', (res) => {
//   let raw = ''
//   res.on('data', (buf) => {
//     raw += buf.toString()
//   })
//   res.on('end', () => {
//     console.log(JSON.parse(raw).filter(word => word.startsWith(`aba`)))
//     // process.stdout.write()
//   })
// })

const topStories =  $('a.title')
.toArray()
.map($)
.map(el => {
  {
    title: el.blah,
    link: el.blah
  }
})
