import { Router } from 'express';
import productsController from '../controllers/product.controller';
import orderController from '../controllers/order.controller';
import loginController from '../controllers/login.controller';
import authLogin from '../middlewares/validateLogin';

const router = Router();

router.post('/products', productsController.createNewProduct);
router.get('/products', productsController.getAllProducts);
router.get('/orders', orderController.getAllOrders);
router.post('/login', authLogin, loginController.login);

export default router;
