var { skipQuotes } = require('../build/index');


test('should add slash before every single quote and double', () => {
  expect(skipQuotes("doesn't and what's")).toBe("doesn\\'t and what\\'s");
});


test('should add slash before every single quote and double', () => {
  expect(skipQuotes('doesn"t and what"s')).toBe("doesn\\\"t and what\\\"s");
});
