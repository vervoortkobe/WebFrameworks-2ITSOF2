const express = require('express');
const router = express.Router();

// Start dataset
let mensen = [
  { id: 1, naam: 'Alice', leeftijd: 30 },
  { id: 2, naam: 'Bob', leeftijd: 25 },
  { id: 3, naam: 'Carol', leeftijd: 35 },
  { id: 4, naam: 'Dave', leeftijd: 40 },
  { id: 5, naam: 'Eve', leeftijd: 28 }
];

// Zoeken

router.get('/zoeken', (req, res) => {
    let gefilterdeMensen = mensen;
  
    if (req.query.naam) {
      gefilterdeMensen = gefilterdeMensen.filter(mens => mens.naam.toLowerCase().includes(req.query.naam.toLowerCase()));
    }
  
    if (req.query.leeftijd) {
      gefilterdeMensen = gefilterdeMensen.filter(mens => mens.leeftijd === parseInt(req.query.leeftijd));
    }
  
    res.send(gefilterdeMensen);
  });

// CRUD Operaties

// Create (POST)
router.post('/', (req, res) => {
  const nieuweMens = {
    id: mensen.length + 1,
    naam: req.body.naam,
    leeftijd: req.body.leeftijd
  };
  mensen.push(nieuweMens);
  res.status(201).send(nieuweMens);
});

// Read (GET)
router.get('/', (req, res) => {
  res.status(200).send(mensen);
});

router.get('/:id', (req, res) => {
  const mens = mensen.find(m => m.id === parseInt(req.params.id));
  if (!mens) res.status(404).send('Mens niet gevonden');
  res.send(mens);
});

// Update (PUT)
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  const index = mensen.findIndex(m => m.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).send('Mens niet gevonden');
    return;
  }
  mensen.splice(index, 1);
  res.status(204).send();
});

module.exports = router;