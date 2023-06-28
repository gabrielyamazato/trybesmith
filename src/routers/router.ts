import { Router } from 'express';
import productsController from '../controllers/product.controller';

const router = Router();

router.post('/products', productsController.createNewProduct);
router.get('/products', productsController.getAllProducts);

export default router;
