'use strict';

const express = require ('express');
const app = express();

const router = require('./router');
const port = 3000;

const models = require('./models/index')

app.use(express.static());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} 🤭😂🧐`);
})
