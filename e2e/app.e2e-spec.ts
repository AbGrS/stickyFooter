import { StickyFooterPage } from './app.po';

describe('sticky-footer App', () => {
  let page: StickyFooterPage;

  beforeEach(() => {
    page = new StickyFooterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
