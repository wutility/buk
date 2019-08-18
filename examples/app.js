const m = require('../index')
console.log(m.addBackSlashes("doesn't and what's"))

console.log(m.rmBackSlashes("doesn\\'t what\\\\'s \\") );

console.log(m.stripHTML("<scrip>hello world</script>living<br />") );

console.log(m.encodeHTML("<scrip>hello world</script>") );
console.log(m.decodeHTML("&lt;scrip&gt;hello world&lt;/script&gt;") );
