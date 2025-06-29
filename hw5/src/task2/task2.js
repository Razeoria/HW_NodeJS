import express from 'express';
import { resolve } from 'path';
import { appendFile } from 'node:fs/promises';

const app = express();
const logFilePath = resolve('src', 'task2', 'errors.log');

app.use(async (req, res) => {
  try {
    throw new Error('Это тестовая ошибка');
  } catch (error) {
    const log = `${new Date().toDateString()} ${error.message}\n`;

    try {
      await appendFile(logFilePath, log);
    } catch (fileError) {
      console.error('Не удалось записать в лог:', fileError.message);
    }

    res.status(500).type('text').send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
