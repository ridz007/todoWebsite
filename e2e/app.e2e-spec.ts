import { DemoWebsitePage } from './app.po';

describe('demo-website App', function() {
  let page: DemoWebsitePage;

  beforeEach(() => {
    page = new DemoWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
