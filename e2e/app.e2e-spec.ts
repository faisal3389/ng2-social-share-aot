import { GiriSocialSharePage } from './app.po';

describe('giri-social-share App', () => {
  let page: GiriSocialSharePage;

  beforeEach(() => {
    page = new GiriSocialSharePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
