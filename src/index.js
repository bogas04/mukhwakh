'use strict';

const express = require('express');
const cors = require('cors');
const hukamnama = require('hukamnama-json');

const template = require('./template');

const server = express() 
  .use(cors())
  .use(express.static(`${__dirname}/public`))
  .get('/api', (req, res) => hukamnama()
    .then(data => res.status(200).json(Object.assign({}, { data }, { error: false })))
    .catch(e => res.status(200).json({ error: true, }))
  )
  .get('/', (req, res) => hukamnama()
    .then(data => res.send(template({ data })))
    .catch(err => res.send(template({ error: true, err })))
  )
  .get('*', (req, res) => res.send(template({ error: true, err: 404 })))
  .listen(process.env.PORT || 8080, () => console.log('Server running on port: ' + server.address().port));
