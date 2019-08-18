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

    _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
        };
      }
      return _typeof(obj);
    },

    _instanceof(left, right) {
      if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
      ) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    },

    addBackSlashes(s) {
      return s.replace(/(["'])/g, "$1");
    },

    rmBackSlashes(s) {
      return s.replace(/\\/g, '').trim();
    },

    skipHTML(s) {
      if (
        (typeof process === "undefined" ? "undefined" : this._typeof(process)) === "object" ||
        typeof window !== "undefined"
      ) {
        return s.replace(/<(.|\n)*?>/g, "");
      } else {
        var d = new DOMParser().parseFromString(s, "text/html");
        return d.body.textContent || "";
      }
    },

    encodeHTML(s) {
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
    },

    decodeHTML(s) {
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
    }
  };
}));
