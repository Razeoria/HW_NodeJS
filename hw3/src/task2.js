import { writeFile, readFile } from 'node:fs/promises';

async function main() {
  try {
    await writeFile('info.txt', 'Node.js is awesome!');
    console.log('Файл "info.txt" успешно создан и записан.');

    const data = await readFile('info.txt', 'utf8');
    console.log('Содержимое файла "info.txt":\n' + data);
  } catch (err) {
    console.error('Ошибка при работе с файлом:', err);
  }
}

main();

