const express = require('express');
const app = express();
const port = 3000;

const mensenRouter = require('./routes/mensen');

app.use(express.json());
app.use('/mensen', mensenRouter);

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});