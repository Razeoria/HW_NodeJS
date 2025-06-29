import express from 'express';

const app = express();

app.use((req, res) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).type('text').send('Unauthorized');
  }

  res.type('text').send('Authorization header received');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
