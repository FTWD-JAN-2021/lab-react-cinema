const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});

router.get('/movies', async (req, res) => {
  const movies = await Movie.find({})
  res.json({ movies })
})

router.get('/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  res.json({ movie })
})

module.exports = router;
