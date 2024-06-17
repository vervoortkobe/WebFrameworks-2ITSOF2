const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/json') {
    // JSON-route
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Dit is een JSON bericht' }));
  } else if (req.url === '/html') {
    // HTML-route
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Dit is een HTML pagina</h1></body></html>');
  } else {
    // Standaard route (platte tekst)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hallo Wereld\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server draait op http://${hostname}:${port}/`);
});
