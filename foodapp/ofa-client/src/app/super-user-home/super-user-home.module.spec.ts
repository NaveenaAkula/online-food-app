import { SuperUserHomeModule } from './super-user-home.module';

describe('SuperUserHomeModule', () => {
  let superUserHomeModule: SuperUserHomeModule;

  beforeEach(() => {
    superUserHomeModule = new SuperUserHomeModule();
  });

  it('should create an instance', () => {
    expect(superUserHomeModule).toBeTruthy();
  });
});
