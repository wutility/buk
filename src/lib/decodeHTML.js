export default function decodeHTML (s) {
  try {
    var DEC_CHARS = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#039;": "'"
    };
    return s.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (m) {
      return DEC_CHARS[m];
    });

  } catch (e) {

    return e.name === 'TypeError'
      ? new Error("Invalid type or no argument passed to function")
      : e;
  }
}