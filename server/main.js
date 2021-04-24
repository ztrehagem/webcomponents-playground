import * as http from 'http'
import * as fs from 'fs'
import * as path from 'path'

const serveUrl = new URL('http://localhost:8080/')

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.url}`)

  const reqUrl = new URL(req.url, serveUrl)
  if (reqUrl.pathname.endsWith('/')) {
    reqUrl.pathname = reqUrl.pathname + 'index.html'
  }
  const staticFilePath = path.join('public', reqUrl.pathname)

  const readStream = fs.createReadStream(staticFilePath)

  readStream.on('error', (error) => {
    if (error.code === 'ENOENT') {
      res.statusCode = 404
      res.end()
    } else {
      console.error('serving static file error')
      console.error(error)
      res.statusCode = 500
      res.end()
    }
  })

  res.statusCode = 200
  readStream.pipe(res)
})

server.listen(parseInt(serveUrl.port), serveUrl.hostname, () => {
  console.log(`listening on ${serveUrl}`)
})
