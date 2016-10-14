import { ReproRouterPage } from './app.po';

describe('repro-router App', function() {
  let page: ReproRouterPage;

  beforeEach(() => {
    page = new ReproRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
