const axios = require('axios');

async function fetchMovieByTitle(title, apiKey) {
  try {
    const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;
    const response = await axios.get(apiUrl);

    if (response.data.Response === 'False') {
      throw new Error(response.data.Error || 'Movie not found');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error.message);
    return null;
  }
}

function getMockMovie(title) {
  return {
    Title: title,
    Year: '2020',
    Genre: 'Action, Adventure',
    Director: 'John Doe',
    Plot: 'A thrilling adventure of a hero saving the world.',
    Poster: 'https://example.com/poster.jpg',
  };
}

module.exports = { fetchMovieByTitle, getMockMovie };
