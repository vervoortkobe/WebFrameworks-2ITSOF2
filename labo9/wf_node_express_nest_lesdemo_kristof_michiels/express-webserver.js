const express = require('express');
const app = express();
const port = 3000;

// Route voor platte tekst
app.get('/', (req, res) => {
  res.send('Hallo Wereld');
});

// Route voor JSON
app.get('/json', (req, res) => {
  res.json({ message: 'Dit is een JSON bericht' });
});

// Route voor HTML
app.get('/html', (req, res) => {
  res.send('<html><body><h1>Dit is een HTML pagina</h1></body></html>');
});

// De server starten
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});