# ✨ Buk 

[![](https://data.jsdelivr.com/v1/package/npm/buk/badge)](https://www.jsdelivr.com/package/npm/buk) ![Snyk badge](https://snyk.io/test/github/haikelfazzani/buk/badge.svg) ![bundlephobia badge](https://badgen.net/bundlephobia/min/buk) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/buk)

```js
$ npm i buk --save
```

## Usage
```js
import buk from 'buk';
or
var buk = require('buk');
```
Or include it via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/buk@1.0.3/index.min.js"></script>
```

## Methods & Examples

- **buk.encodeHTML(String): String|Error**
```js
buk.encodeHTML("<scrip>hello world</script>") 
// &lt;scrip&gt;hello world&lt;/script&gt;
```
- **buk.decodeHTML(String): String|Error**
```js
buk.decodeHTML("&lt;scrip&gt;hello world&lt;/script&gt;") 
// <scrip>hello world</script>
```

- **buk.skipHTML(String): String|Error**
```js
buk.skipHTML("<scrip>hello world</script>living<br />") 
// hello worldliving
```

- **buk.addBackSlashes(String): String|Error**
```js
buk.addBackSlashes("doesn't and what's") 
// doesn\'t and what\'s`
```
- **buk.rmBackSlashes(String): String|Error**
```js
buk.rmBackSlashes("doesn\\'t what\\\\'s \\") 
// doesn't what's
```

## Notes

- Works both in [Node.js](https://nodejs.org) and in the browser.
- All pull requests are welcome, feel free.

## License
MIT