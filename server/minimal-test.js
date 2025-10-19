import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({ message: 'GET test working' });
});

app.post('/test-post', (req, res) => {
  res.json({ message: 'POST test working', body: req.body });
});

app.listen(3001, () => {
  console.log('Minimal test server running on port 3001');
});