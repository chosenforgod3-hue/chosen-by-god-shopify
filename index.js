const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Chosen by God App - Running');
});
server.listen(process.env.PORT || 3000);
