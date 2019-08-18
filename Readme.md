# Buk 

[![](https://data.jsdelivr.com/v1/package/npm/buk/badge)](https://www.jsdelivr.com/package/npm/buk) ![Snyk badge](https://snyk.io/test/github/haikelfazzani/buk/badge.svg) ![bundlephobia badge](https://badgen.net/bundlephobia/min/buk) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/buk)

```js
$ npm i buk --save
```

## Usage
```
import buk from 'buk';
or
var buk = require('buk');
```
Or include it via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/buk@1.0.1/index.min.js"></script>
```

## Methods & Examples
```js
buk.addBackSlashes("doesn't and what's") // doesn\'t and what\'s
buk.rmBackSlashes("doesn\\'t what\\\\'s \\") // doesn't what's

buk.stripHTML("<scrip>hello world</script>living<br />") // hello worldliving

buk.encodeHTML("<scrip>hello world</script>") // &lt;scrip&gt;hello world&lt;/script&gt;
buk.decodeHTML("&lt;scrip&gt;hello world&lt;/script&gt;") // <scrip>hello world</script>
```

## Notes

- Works both in [Node.js](https://nodejs.org) and in the browser.
- All pull requests are welcome, feel free.