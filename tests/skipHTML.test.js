var buk = require('../index');


/**
 * skipHTML  
 * 9ms -> 4ms
 */

test('skip html tags and return string between or out', () => {
  expect(buk.skipHTML("<scrip>hello world</script>living<br />"))
  .toBe("hello worldliving");
});