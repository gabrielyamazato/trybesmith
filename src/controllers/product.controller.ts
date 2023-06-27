import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createNewProduct(req: Request, res: Response): Promise<Response> {
  const response = await productService.createNewProduct(req.body);

  return res.status(201).json(response);
}

export default {
  createNewProduct,
};
