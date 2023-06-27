import { Product } from '../types/Product';
import productService from '../database/models/product.model';

async function createNewProduct(product: Product) {
  const create = await productService.create(product);

  return create
}

export default {
  createNewProduct,
};
