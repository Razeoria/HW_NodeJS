import express from 'express';

const app = express();

app.put('/', (req, res) => {
  res.type('text').send('PUT-запрос обработан');
});

app.delete('/', (req, res) => {
  res.type('text').send('DELETE-запрос обработан');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
