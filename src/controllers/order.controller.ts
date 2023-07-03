import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getAllOrders(_req: Request, res: Response): Promise<Response> {
  const resp = await orderService.getAllOrders();

  return res.status(200).json(resp);
}

export default {
  getAllOrders,
};
