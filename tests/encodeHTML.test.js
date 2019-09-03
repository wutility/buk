var { encodeHTML } = require('../build/index');

test('should encode html special chars', () => {
  expect(encodeHTML("<scrip>hello world</script>"))
    .toBe("&lt;scrip&gt;hello world&lt;/script&gt;");
});

test('should encode html special chars', () => {
  expect(encodeHTML("<link />"))
    .toBe("&lt;link /&gt;");
});