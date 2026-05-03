const mongoose = require('mongoose');
const Movie = require('./movieModel');
const URI = 'mongodb://127.0.0.1:27017/moviedb';
async function run() {
  await mongoose.connect(URI);
  await Movie.deleteMany({});
  await new Movie({ title: 'Parasite', year: 2019, genre: 'Thriller' }).save();
  console.log('Movies in DB:', await Movie.find());
  await mongoose.disconnect();
}
run().catch(console.error);
