const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ mensage: "Olá Mundo" });
})

app.listen(3333);