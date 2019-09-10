var {decodeHTML} = require('../index');

test('should decode String special chars to html tags', () => {
  expect(decodeHTML("&lt;scrip&gt;hello world&lt;/script&gt;"))
  .toBe("<scrip>hello world</script>");
});

test('should decode String special chars to html tags', () => {
  expect(decodeHTML("&lt;&lt;"))
  .toBe("<<");
});

