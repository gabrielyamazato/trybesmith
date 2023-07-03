import { literal } from 'sequelize';
import orderModel, { OrderSequelizeModel } from '../database/models/order.model';
import productModel from '../database/models/product.model';

async function getAllOrders(): Promise<OrderSequelizeModel[]> {
  const response = await orderModel.findAll({
    include: 
      [{ model: productModel, as: 'productIds', attributes: [] }],
    attributes: [
      'id',
      'userId',
      [
        literal('JSON_ARRAYAGG(productIds.id)'),
        'productIds',
      ],
    ],
    group: [
      'Order.id',
    ],
    raw: true,
  });
  
  return response;
}

export default {
  getAllOrders,
};
