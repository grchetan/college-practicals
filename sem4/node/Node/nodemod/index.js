const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Express server is run');
});

app.get('/About', (req, res) => {
  res.send('This is about page');
});

app.get('/Setting', (req, res) => {
  res.send('This is Setting page');
});

app.post('/user', (req, res) => {
  const data = req.body;
  const QueryData = req.query;

  res.send({
    message: 'Data received successfully',
    receivedBodyData: data,
    receivedQueryData: QueryData,
  });
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
