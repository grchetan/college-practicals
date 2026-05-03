const { fetchMovies } = require('./movieFetcher');
async function showMovies() {
  try {
    const movies = await fetchMovies();
    console.log(' MOVIE CATALOG:\n');
    movies.forEach((movie, idx) => {
      console.log(
        `${idx + 1}. ${movie.title} (${movie.year}) - ${movie.genre}`,
      );
    });
  } catch (err) {
    console.error('Error:', err.message);
  }
}
showMovies();
