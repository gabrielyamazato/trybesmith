import { Router } from 'express';
import productsController from '../controllers/product.controller';
import orderController from '../controllers/order.controller';

const router = Router();

router.post('/products', productsController.createNewProduct);
router.get('/products', productsController.getAllProducts);
router.get('/orders', orderController.getAllOrders);

export default router;
