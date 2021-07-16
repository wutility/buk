# ✨ Buk   
encode, decode, filter, skip, HTML special chars  

[![](https://data.jsdelivr.com/v1/package/npm/buk/badge)](https://www.jsdelivr.com/package/npm/buk) ![Snyk badge](https://snyk.io/test/github/haikelfazzani/buk/badge.svg) ![bundlephobia badge](https://badgen.net/bundlephobia/min/buk) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/buk)

```js
$ npm i buk --save
```

## Usage
```js
import { encodeHTML } from 'buk';
// or
var { encodeHTML } = require('buk');
```

Or include it via jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/buk@1.2.2/index.min.js"></script>
access via object : buk
Example : buk.skipHTML("<scrip>hello world</script>living<br />") 
// hello worldliving
```

## Methods & Examples

- **encodeHTML(String): String|TypeError**    
*chars to encode : & < > " ' @ + / `
```js
encodeHTML("<scrip>hello world</script>") 
// &lt;scrip&gt;hello world&lt;&sol;script&gt;
```

- **decodeHTML(String): String|TypeError**  
*chars to decode : & < > " ' @ + / `
```js
decodeHTML("&lt;scrip&gt;hello world&lt;&sol;script&gt;") 
// <div>hello world</div>
```

- **skipHTML(String): String|TypeError**
```js
skipHTML("<scrip>hello world</script> 2019<br />") 
// hello world 2019
```

## Notes
- TypeError : Invalid type or no argument passed to function.
- Works both in [Node.js](https://nodejs.org) and in the browser.
- All pull requests are welcome, feel free.

## License
MIT