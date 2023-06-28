import { Product } from '../types/Product';
import productService, { ProductSequelizeModel } from '../database/models/product.model';

async function createNewProduct(product: Product): Promise<Product> {
  const create = await productService.create(product);
  
  return {
    id: create.dataValues.id,
    name: product.name,
    price: product.price,
  };
}

async function getAllProducts(): Promise<ProductSequelizeModel[]> {
  const response = await productService.findAll();

  return response;
}

export default {
  createNewProduct,
  getAllProducts,
};
