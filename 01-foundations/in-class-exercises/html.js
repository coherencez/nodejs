const { createServer } = require('http')
const { get } = require('request')
const { load } = require('cheerio')

// const url = 'https://node-http.firebaseio.com/words.json'
const url = 'http://www.reddit.com'
const server = createServer()
const arr = []

server.on('request', (req, res) => {
  console.log(req.url);
  get(`${url}${req.url}`, (err, _, body) => {
    const $ = load(body)
    // dew stuff
    // $('img').attr('src', 'https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png')
    $('a.title').filter((i, v) => {
      let redditObj = {
        title: v.children[0].data,
        uri: v.attribs.href
      }
      arr.push(redditObj)

      // console.log('DATA', v.attribs.href, 'TITLE:', v.children[0].data)
    })
    console.log(arr)
    res.end($.html())
  })

})


server.listen(8080)

// get(url, (err, res, body) => {
//   console.log(JSON.parse(body).slice(0,10))
// })
