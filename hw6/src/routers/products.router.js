import { Router } from 'express';

import Product from '../db/product.js';
import { productAddSchema, productUpdateSchema } from '../validation/product.schemas.js';

const productsRouter = Router();

// Получить все продукты
productsRouter.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Добавить новый продукт
productsRouter.post('/', async (req, res) => {
  try {
    await productAddSchema.validate(req.body);
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Получить продукт по id
productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ message: `Product with id = ${id} not found` });
  }

  res.json(product);
});

// Обновить продукт по id
productsRouter.put('/:id', async (req, res) => {
  try {
    await productUpdateSchema.validate(req.body);

    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: `Product with id = ${id} not found` });
    }

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Удалить продукт по id
productsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ message: `Product with id = ${id} not found` });
  }

  await product.destroy();
  res.json(product);
});

export default productsRouter;
