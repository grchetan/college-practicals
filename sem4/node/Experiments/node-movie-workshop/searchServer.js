const express = require('express');
const app = express();
const moviesList = [
  { id: 1, title: 'Inception', year: 2010, rating: '8.8' },
  { id: 2, title: 'Interstellar', year: 2014, rating: '8.6' },
  { id: 3, title: 'The Dark Knight', year: 2008, rating: '9.0' },
];
app.use(express.static('public'));
app.get('/search', (req, res) => {
  const q = req.query.q.toLowerCase();
  res.json(moviesList.filter((m) => m.title.toLowerCase().includes(q)));
});
app.listen(3000, () => console.log('Search server on 3000'));
