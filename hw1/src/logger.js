import { appendFile } from 'node:fs/promises';

export async function logMessage(message) {
  const fullMessage = `[${new Date().toISOString()}] ${message}\n`;

  try {
    await appendFile('log.txt', fullMessage);
  } catch (err) {
    console.error('Ошибка записи в файл:', err);
  }
}
