const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose
  .connect('mongodb://127.0.0.1:27017/chetanDB')
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  Mobile: Number,
});

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', userSchema);

const newUser = new User({
  name: 'Chetan',
  email: 'chetan@gmail.com',
  Mobile: 9876543210,
});

const archit = new User({
  nmae: 'Archit Jain',
  email: 'architjain@gmail.com',
  Mobile: 9596949395,
});

architnewUser
  .save()
  .then(() => console.log('User saved in DB'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello Chetan ');
});

app;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
