import { access, rm, mkdir } from 'node:fs/promises';

const folder = 'myFolder';

async function recreateFolder() {
  try {
    await access(folder);
    console.log(`Каталог "${folder}" уже существует. Удаляем...`);
    await rm(folder, { recursive: true, force: true });
    console.log(`Каталог "${folder}" успешно удалён.`);
  } catch {

  }

  try {
    await mkdir(folder);
    console.log(`Каталог "${folder}" успешно создан.`);
  } catch (err) {
    console.error('Ошибка при создании каталога:', err);
  }
}

recreateFolder();

