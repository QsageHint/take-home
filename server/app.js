const express = require('express');
const { Agent } = require('./model');
const bodyParser = require('body-parser');
const { Op } = require('sequelize');

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

app.post('/search', async (req, res, next) => {
  const agents = await Agent.findAll({
    where: {
      practiceAreas: {
        [Op.like]: `%${req.body.searchString}%`
      }
    }
  })
  return res.json(agents);
})

app.post('/createreview', async (req, res, next) => {
  let review = "";
  await Agent.findByPk(req.body.id).then(agent => {
    review = agent.dataValues.review;
  })
  const str = review + '\n' + req.body.review;

  await Agent.update({
    review: str
  }, {
    where: { id: req.body.id }
  });

  return res.json({ status: 'success' });

})

module.exports = app;
