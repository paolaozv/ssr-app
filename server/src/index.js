const express = require('express');
const app = express();

app.get('/', (req, res) => {});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`
    👍 Listening on http://localhost:${PORT}
  `);
})