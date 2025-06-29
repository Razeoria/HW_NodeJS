import 'dotenv/config';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const fileName = process.env.FILENAME;
const filePath = resolve('src', fileName);
const sourceFilePath = resolve('README.md');

const writeInFile = async () => {
  try {
    const sourceText = await readFile(sourceFilePath, 'utf-8');
    await writeFile(filePath, sourceText);
    console.log(`Текст из README.md успешно записан в ${fileName}`);
  } catch (error) {
    console.error(`Ошибка записи в файл ${fileName}: ${error.message}`);
  }
};

const readFromFile = async () => {
  try {
    const text = await readFile(filePath, 'utf-8');
    console.log('📄 Содержимое файла:');
    console.log(text);
  } catch (error) {
    console.error(`Ошибка чтения файла ${fileName}: ${error.message}`);
  }
};

await writeInFile();
await readFromFile();

