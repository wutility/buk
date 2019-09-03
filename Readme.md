# ✨ Buk 

[![](https://data.jsdelivr.com/v1/package/npm/buk/badge)](https://www.jsdelivr.com/package/npm/buk) ![Snyk badge](https://snyk.io/test/github/haikelfazzani/buk/badge.svg) ![bundlephobia badge](https://badgen.net/bundlephobia/min/buk) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/buk)

```js
$ npm i buk --save
```

## Usage
```js
import { skipQuotes } from 'buk';
// or
var { skipQuotes } = require('buk');
```

Or include it via jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/buk@1.1.1/build/index.min.js"></script>
access via object : buk
Example : skipHTML("<scrip>hello world</script>living<br />") // hello worldliving
```

## Methods & Examples

- **encodeHTML(String): String|Error**    
*chars to encode : < '' "" & >*
```js
encodeHTML("<scrip>hello world</script>") 
// &lt;scrip&gt;hello world&lt;/script&gt;
```

- **decodeHTML(String): String|Error**  
*chars to decode : '' < "" & >*
```js
decodeHTML("&lt;div&gt;hello world&lt;/div&gt;") // <div>hello world</div>
```

- **skipHTML(String): String|Error**
```js
skipHTML("<scrip>hello world</script>living<br />") // hello worldliving
```

- **skipQuotes(String): String|Error**  
*chars to skip : ''  ""*
```js
skipQuotes("doesn't and what's") // doesn\'t and what\'s
```

- **rmBackSlashes(String): String|Error**
```js
rmBackSlashes("doesn\\'t what\\\\'s \\") // doesn't what's
```

- **wrap(String, Object): String**
```js
wrap("hello world", { ws: "<div>", we: "</div>" }) // <div>hello world</div>
wrap("hello world", { ws: "", we: "" }) // hello world
wrap("hello world", { ws: "", we: "</br>" }) // hello world</br>
```

## Notes
- Works both in [Node.js](https://nodejs.org) and in the browser.
- All pull requests are welcome, feel free.

## License
MIT