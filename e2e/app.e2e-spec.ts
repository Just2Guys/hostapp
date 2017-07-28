import { IwonAppPage } from './app.po';

describe('iwon-app App', () => {
  let page: IwonAppPage;

  beforeEach(() => {
    page = new IwonAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
