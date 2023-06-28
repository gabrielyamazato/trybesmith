import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';

import productService from '../../../src/services/product.service';
import productModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

describe('Teste da camada service de products', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa o retorno esperado da função', async function () {
    sinon.stub(productModel, 'create').resolves(productMock);
  })
});
