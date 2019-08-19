(function (name, factory) {
  if (typeof module != 'undefined') {
    module.exports = factory();
  }
  else if (typeof define == 'function' && typeof define.amd == 'object') {
    define(factory);
  }
  else {
    this[name] = factory();
  }
}('buk', function () {

  return {

    addBackSlashes(s) {
      return typeof s === 'string' || s instanceof String
        ? s.replace(/(["'])/g, "$1")
        : new Error("Invalid type passed to function");
    },

    rmBackSlashes(s) {
      return typeof s === 'string' || s instanceof String
        ? s.replace(/\\/g, '').trim()
        : new Error("Invalid type passed to function");
    },

    skipHTML(s) {
      try {

        if (typeof process === "object" || typeof window !== "undefined") {
          return s.replace(/<(.|\n)*?>/g, "");
        } else {
          var d = new DOMParser().parseFromString(s, "text/html");
          return d.body.textContent || "";
        }

      } catch (e) {

        return e.name === 'TypeError'
          ? new Error("Invalid type or no argument passed to function")
          : e;
      }
    },

    encodeHTML(s) {      
      try {
        var ENC_CHARS = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        };
        return s.replace(/[&<>"']/g, function (m) {
          return ENC_CHARS[m];
        });

      } catch (e) {

        return e.name === 'TypeError'
          ? new Error("Invalid type or no argument passed to function")
          : e;
      }
    },

    decodeHTML(s) {      
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


  };

}));
