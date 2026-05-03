const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
app.use(helmet());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);
const JWT_SECRET = 'super_secret_key_change_in_production';
const usersDB = [];
app.post(
  '/register',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 5 }).trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const hashed = await bcrypt.hash(req.body.password, 10);
    usersDB.push({ email: req.body.email, password: hashed });
    res.status(201).json({ message: 'User registered successfully' });
  },
);
app.post('/login', async (req, res) => {
  const user = usersDB.find((u) => u.email === req.body.email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
});
function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Secure movie data: authenticated users only' });
});
app.listen(4000, () => console.log('Secure API running on port 4000'));
