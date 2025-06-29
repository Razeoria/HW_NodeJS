import { object, string, number } from 'yup';

export const productAddSchema = object({
  name: string().required('Name is required'),
  price: number().min(0, 'Price must be at least 0').required('Price is required'),
});

export const productUpdateSchema = object({
  name: string(),
  price: number().min(0, 'Price must be at least 0'),
});
