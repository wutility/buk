var {decodeHTML} = require('../build/index');

test('should decode String special chars to html tags', () => {
  expect(decodeHTML("&lt;scrip&gt;hello world&lt;&sol;script&gt;"))
  .toBe("<scrip>hello world</script>");
});

test('should decode String special chars to html tags', () => {
  expect(decodeHTML("&lt;&lt;"))
  .toBe("<<");
});

test('should decode String special chars to html tags', () => {
  expect(decodeHTML("&plus;&commat;&apos;"))
  .toBe("+@'");
});
