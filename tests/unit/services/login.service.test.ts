import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import bcrypt from 'bcryptjs';

import UserModel from '../../../src/database/models/user.model';
import LoginService from '../../../src/services/login.service';
const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

describe('Testes da camada service de login', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa o retorno da rota de Login', async function () {
    const user = {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 8,
      password: bcrypt.hashSync('terrível', SALT_ROUNDS),
    }
    
    const buildUser = UserModel.build(user);

    sinon.stub(UserModel, 'findOne').resolves(buildUser);

    const loginUser = {
      username: 'Hagar',
      password: 'terrível',
    };

    const result = await LoginService.loginVerify(loginUser);

    expect(result.token).to.have.length.greaterThan(7);
  })
  it('Testa o retorno de erro da rota de Login', async function () {
    const user = {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 8,
      password: bcrypt.hashSync('Ronaldo', SALT_ROUNDS),
    }
    
    const buildUser = UserModel.build(user);

    sinon.stub(UserModel, 'findOne').resolves(buildUser);

    const loginUser = {
      username: 'Hagar',
      password: 'terrível',
    };

    const result = await LoginService.loginVerify(loginUser);

    expect(result.token).to.have.lengthOf(6);
    expect(result).to.be.deep.equal({ token: 'FAILED' });
  })
});
