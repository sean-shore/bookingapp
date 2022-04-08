// spec.js
describe('Booking App', function() {
  it('should have a title', function() {
    browser.get('');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});
