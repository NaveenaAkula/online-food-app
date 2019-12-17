import { MenuTypeModule } from './menu-type.module';

describe('MenuTypeModule', () => {
  let menuTypeModule: MenuTypeModule;

  beforeEach(() => {
    menuTypeModule = new MenuTypeModule();
  });

  it('should create an instance', () => {
    expect(menuTypeModule).toBeTruthy();
  });
});
