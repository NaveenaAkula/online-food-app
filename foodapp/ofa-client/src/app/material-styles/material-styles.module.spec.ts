import { MaterialStylesModule } from './material-styles.module';

describe('MaterialStylesModule', () => {
  let materialStylesModule: MaterialStylesModule;

  beforeEach(() => {
    materialStylesModule = new MaterialStylesModule();
  });

  it('should create an instance', () => {
    expect(materialStylesModule).toBeTruthy();
  });
});
