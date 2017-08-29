import { IbcPage } from './app.po';

describe('ibc App', () => {
  let page: IbcPage;

  beforeEach(() => {
    page = new IbcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
