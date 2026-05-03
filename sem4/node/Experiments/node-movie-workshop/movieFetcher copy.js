const axios = require('axios');
async function fetchMovies() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response.data;
  } catch (error) {
    throw new Error('API fetch failed: ' + error.message);
  }
}
module.exports = { fetchMovies };
