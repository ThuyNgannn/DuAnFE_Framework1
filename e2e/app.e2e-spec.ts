import { AppPage } from './app.po';


describe('framework1 App', () => {
>>>>>>> a8a9809a65c59729c6ddf6b0b9eb7f4934a209f0
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
