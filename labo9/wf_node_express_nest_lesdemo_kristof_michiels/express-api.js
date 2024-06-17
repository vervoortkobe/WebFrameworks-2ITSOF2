const express = require('express');
const app = express();
const port = 3000;

// Middleware om JSON request bodies te verwerken
app.use(express.json());

// Start dataset
let mensen = [
  { id: 1, naam: 'Alice', leeftijd: 30 },
  { id: 2, naam: 'Bob', leeftijd: 25 },
  { id: 3, naam: 'Carol', leeftijd: 35 },
  { id: 4, naam: 'Dave', leeftijd: 40 },
  { id: 5, naam: 'Eve', leeftijd: 28 }
];

// CRUD Operaties

// Create (POST)
app.post('/mensen', (req, res) => {
  const nieuweMens = {
    id: mensen.length + 1,
    naam: req.body.naam,
    leeftijd: req.body.leeftijd
  };
  mensen.push(nieuweMens);
  res.status(201).send(nieuweMens);
});

// Read (GET)
app.get('/mensen', (req, res) => {
  res.status(200).send(mensen);
});

app.get('/mensen/:id', (req, res) => {
  const mens = mensen.find(m => m.id === parseInt(req.params.id));
  if (!mens) res.status(404).send('Mens niet gevonden');
  res.send(mens);
});

// Update (PUT)
app.put('/mensen/:id', (req, res) => {
  const mens = mensen.find(m => m.id === parseInt(req.params.id));
  if (!mens) {
    res.status(404).send('Mens niet gevonden');
    return;
  }
  mens.naam = req.body.naam;
  mens.leeftijd = req.body.leeftijd;
  res.send(mens);
});

// Delete (DELETE)
app.delete('/mensen/:id', (req, res) => {
  const index = mensen.findIndex(m => m.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).send('Mens niet gevonden');
    return;
  }
  mensen.splice(index, 1);
  res.status(204).send();
});

// Server starten
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
