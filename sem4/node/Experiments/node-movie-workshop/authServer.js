const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }),
);
mongoose.connect('mongodb://127.0.0.1:27017/authDemo');
const User = mongoose.model(
  'User',
  new mongoose.Schema({ email: String, password: String }),
);
app.post('/register', async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  await User.create({ email: req.body.email, password: hashed });
  res.send('Registered! <a href="/login">Login</a>');
});
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    req.session.userId = user._id;
    res.send('Login success! Welcome to Movies hub.');
  } else res.send('Invalid credentials');
});
app.get('/dashboard', (req, res) => {
  if (!req.session.userId) return res.send('Unauthorized');
  res.send('Protected movie dashboard ');
});
app.listen(4000, () => console.log('Auth running on 4000'));
