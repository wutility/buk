# Buk 

[![](https://data.jsdelivr.com/v1/package/npm/buk/badge)](https://www.jsdelivr.com/package/npm/buk) ![Snyk badge](https://snyk.io/test/github/haikelfazzani/buk/badge.svg) ![bundlephobia badge](https://badgen.net/bundlephobia/min/buk) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/buk)

```js
$ npm i buk --save
```

## Usage
```
import m from 'buk';
or
var m = require('buk');
```
Or include it via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/buk@0.2.1/index.min.js"></script>
```

## Methods & Examples
```js
m.addBackSlashes("doesn't and what's") // doesn\'t and what\'s
m.rmBackSlashes("doesn\\'t what\\\\'s \\") // doesn't what's

m.stripHTML("<scrip>hello world</script>living<br />") // hello worldliving

m.encodeHTML("<scrip>hello world</script>") // &lt;scrip&gt;hello world&lt;/script&gt;
m.decodeHTML("&lt;scrip&gt;hello world&lt;/script&gt;") // <scrip>hello world</script>
```

## Notes

- Works both in [Node.js](https://nodejs.org) and in the browser.
- All pull requests are welcome, feel free.