const express = require('express');
const { Agent } = require('./model');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post('/create', async (req, res, next) => {
  await Agent.create(req.body);
  return res.json({status: 'success'});
})

module.exports = app;
