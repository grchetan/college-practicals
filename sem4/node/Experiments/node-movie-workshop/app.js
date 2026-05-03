const { fetchMovies } = require('./movieFetcher');
fetchMovies()
  .then(movies => console.log(movies))
  .catch(err => console.error(err));
