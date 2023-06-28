import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';

import productService from '../../../src/services/product.service';
import productModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

describe('Teste da camada service de products', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa o retorno esperado da função de cadastro', async function () {
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

  it('Testa o retorno da função getAll', async function () {
    const buildedProducts = productMock.map((elem) => productModel.build(elem));

    sinon.stub(productModel, 'findAll').resolves(buildedProducts);

    const result = await productService.getAllProducts();

    expect(result).to.be.deep.equal(buildedProducts);
  })
});
