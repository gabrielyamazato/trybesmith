import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createNewProduct(req: Request, res: Response): Promise<Response> {
  const response = await productService.createNewProduct(req.body);

  return res.status(201).json(response);
}

async function getAllProducts(_req: Request, res: Response): Promise<Response> {
  const response = await productService.getAllProducts();

  return res.status(200).json(response);
}

export default {
  createNewProduct,
  getAllProducts,
};
