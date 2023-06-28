import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';

import productService from '../../../src/services/product.service';
import productModel from '../../../src/database/models/product.model';

describe('Teste da camada service de products', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa o retorno esperado da função', async function () {
    const mockedResponse = productModel.build({
        id: 6,
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
        orderId: 4      
    });

    sinon.stub(productModel, 'create').resolves(mockedResponse);

    const result = await productService.createNewProduct({
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    })

    expect(result.id).to.be.eq(6)
  })
});
