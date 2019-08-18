var buk = require('../index');


/**
 * addBackSlashes  
 */
test('should add slash before every single quote and double', () => {
  expect(buk.addBackSlashes("doesn't and what's")).toBe("doesn\'t and what\'s");
});
