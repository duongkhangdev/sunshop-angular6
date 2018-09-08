import { FunctionModule } from './function.module';

describe('FunctionModule', () => {
  let functionModule: FunctionModule;

  beforeEach(() => {
    functionModule = new FunctionModule();
  });

  it('should create an instance', () => {
    expect(functionModule).toBeTruthy();
  });
});
