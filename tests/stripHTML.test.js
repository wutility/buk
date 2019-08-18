var buk = require('../index');


/**
 * stripHTML  
 * 9ms -> 4ms
 */

test('skip html tags and return string between or out', () => {
  expect(buk.stripHTML("<scrip>hello world</script>living<br />"))
  .toBe("hello worldliving");
});