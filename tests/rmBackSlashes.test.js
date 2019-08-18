var buk = require('../index');

/**
 * rmBackSlashes  
 */
test('should add slash before every single quote and double', () => {
  expect(buk.rmBackSlashes("doesn\\'t what\\\\'s \\")).toBe("doesn't what's");
});