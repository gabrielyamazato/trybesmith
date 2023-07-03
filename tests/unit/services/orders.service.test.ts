import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';

import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order.service';
import orderMock from '../../mocks/order.mock';

describe('Teste da camada service de orders', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa o retorno da função getAll', async function () {
    const buildedOrders = orderMock.map((elem) => OrderModel.build(elem));

    sinon.stub(OrderModel, 'findAll').resolves(buildedOrders);

    const result = await orderService.getAllOrders();

    expect(result).to.be.deep.equal(buildedOrders);
  })
});
