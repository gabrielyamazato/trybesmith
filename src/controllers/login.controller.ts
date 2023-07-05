import { Request, Response } from "express";
import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  const resp = await loginService.loginVerify(req.body);

  if (resp.token ===  'FAILED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(200).json(resp);
}

export default {
  login,
};
