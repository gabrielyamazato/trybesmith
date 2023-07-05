import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

chai.use(sinonChai);

import ProductService from '../../../src/services/product.service';
import ProductController from '../../../src/controllers/product.controller';

describe('Testes da camada controller de products', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa se a função retorna todos os produtos', async function () {
    req.body = {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    }

    const resp = {
      "id": 6,
      "name": "Martelo de Thor",
      "price": "30 peças de ouro"
    }

    sinon.stub(ProductService, 'createNewProduct').resolves(resp)

    await ProductController.createNewProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWithExactly(resp);
  })
});
