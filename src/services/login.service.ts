import bcrypt from 'bcryptjs';
import Utils from '../utils/JWT';
import UserModel from '../database/models/user.model';

type Login = {
  username: string,
  password: string,
};

type Token = {
  token: string,
};

async function loginVerify(login: Login): Promise<Token> {
  const user = await UserModel.findOne({ where: { username: login.username } });

  if (!user || !bcrypt.compareSync(login.password, user.dataValues.password)) {
    return { token: 'FAILED' };
  }

  const { username } = user.dataValues;

  const token = Utils.generateToken({ username });

  return {
    token,
  };
}

export default {
  loginVerify,
};
