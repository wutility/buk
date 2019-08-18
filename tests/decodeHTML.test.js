var m = require('../index');


/**
 * encodeHTML  
 * 8ms -> 5ms
 */

test('should decode String special chars to html tags', () => {
  expect(m.decodeHTML("&lt;scrip&gt;hello world&lt;/script&gt;"))
  .toBe("<scrip>hello world</script>");
});