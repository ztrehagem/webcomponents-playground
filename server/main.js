import * as http from 'http'
import serveStatic from 'serve-static'

const port = 8080

const staticServer = serveStatic('public')

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.url}`)
  staticServer(req, res)
})

server.listen(port, () => {
  console.log(`listening on ${port}`)
})
