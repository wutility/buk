var { wrap } = require('../build/index');

test('wrap a string', () => {
  expect(wrap("hello world", { ws: "<div>", we: "</div>" }))
    .toBe("<div>hello world</div>");
});

test('wrap a string', () => {
  expect(wrap("hello world", { ws: "", we: "" }))
    .toBe("hello world");
});

test('wrap a string', () => {
  expect(wrap("hello world", { ws: "", we: "</br>" }))
    .toBe("hello world</br>");
});


