// convert this code to express based code
const http = require('http')

const requestListener = function (req, res) {
	res.writeHead(200)
	res.end('Hello, World!')
}

const server = http.createServer(requestListener)
server.listen(process.env.PUBLIC_PORT)
