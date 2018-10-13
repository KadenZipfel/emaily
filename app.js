const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = 3000 || process.env.PORT
app.listen(PORT);