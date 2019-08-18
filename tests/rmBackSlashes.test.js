var m = require('../index');

/**
 * rmBackSlashes  
 */
test('should add slash before every single quote and double', () => {
  expect(m.rmBackSlashes("doesn\\'t what\\\\'s \\")).toBe("doesn't what's");
});