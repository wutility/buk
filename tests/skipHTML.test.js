var { skipHTML } = require('../build/index');


test('skip html tags and return string between or out', () => {
  expect(skipHTML("<scrip>hello world</script>living<br />"))
    .toBe("hello worldliving");
});


test('skip html tags and return string between or out', () => {
  expect(skipHTML("<link  /><script src=''>"))
    .toBe("");
});
