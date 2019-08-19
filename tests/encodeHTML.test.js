var buk = require('../index');

/**
 * encodeHTML  
 * 8ms -> 5ms
 */

test('should encode html special chars', () => {
  expect(buk.encodeHTML("<scrip>hello world</script>"))
  .toBe("&lt;scrip&gt;hello world&lt;/script&gt;");
});

