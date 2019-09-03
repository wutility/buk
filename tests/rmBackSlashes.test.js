var { rmBackSlashes } = require('../build/index');

/**
 * rmBackSlashes  
 */
test('should add slash before every single quote and double', () => {
  expect(rmBackSlashes("doesn\\'t what\\\\'s \\")).toBe("doesn't what's");
});

test('should add slash before every single quote and double', () => {
  expect(rmBackSlashes("doesn\'t what\'s")).toBe("doesn't what's");
});