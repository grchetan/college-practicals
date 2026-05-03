const express = require('express');
const app = express();
const PORT = 3000;

const moviesList = [
  { id: 1, title: 'Inception', year: 2010, rating: '8.8' },
  { id: 2, title: 'Interstellar', year: 2014, rating: '8.6' },
  { id: 3, title: 'The Dark Knight', year: 2008, rating: '9.0' }
];

// Route
app.get('/movies', (req, res) => {
  console.log('HTTP GET /movies → 200 OK'); 
  console.log(JSON.stringify(moviesList, null, 2)); 

  res.json(moviesList);
});

// Server start
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});