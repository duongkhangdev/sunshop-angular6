import { ProductCategoryModule } from './product-category.module';

describe('ProductCategoryModule', () => {
  let productCategoryModule: ProductCategoryModule;

  beforeEach(() => {
    productCategoryModule = new ProductCategoryModule();
  });

  it('should create an instance', () => {
    expect(productCategoryModule).toBeTruthy();
  });
});
