import { PfDAWPage } from './app.po';

describe('pf-daw App', function() {
  let page: PfDAWPage;

  beforeEach(() => {
    page = new PfDAWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
