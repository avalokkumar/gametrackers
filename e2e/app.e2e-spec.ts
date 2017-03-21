import { GametrackersPage } from './app.po';

describe('gametrackers App', function() {
  let page: GametrackersPage;

  beforeEach(() => {
    page = new GametrackersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
