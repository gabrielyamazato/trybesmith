import { Product } from '../types/Product';
import productService from '../database/models/product.model';

async function createNewProduct(product: Product): Promise<Product> {
  const create = await productService.create(product);
  
  return {
    id: create.dataValues.id,
    name: product.name,
    price: product.price,
  };
}

export default {
  createNewProduct,
};
