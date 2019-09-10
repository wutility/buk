(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.buk = {}));
}(this, function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }

  function skipHTML(s) {
    try {
      if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' || typeof window !== 'undefined') {
        return s.replace(/<(.|\n)*?>/g, '');
      } else {
        var d = new DOMParser().parseFromString(s, "text/html");
        return d.body.textContent || '';
      }
    } catch (e) {
      return e.name === 'TypeError' ? new Error('Invalid type or no argument passed to function') : e;
    }
  }

  function encodeHTML(s) {
    try {
      var ENC_CHARS = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return s.replace(/[&<>"']/g, function (m) {
        return ENC_CHARS[m]
      });
    } catch (e) {
      return e.name === 'TypeError' ? new Error('Invalid type or no argument passed to function') : e;
    }
  }

  function decodeHTML(s) {
    try {
      var DEC_CHARS = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'"
      };
      return s.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (m) {
        return DEC_CHARS[m];
      });
    } catch (e) {
      return e.name === 'TypeError' ? new Error("Invalid type or no argument passed to function") : e;
    }
  }
  exports.decodeHTML = decodeHTML;
  exports.encodeHTML = encodeHTML;
  exports.skipHTML = skipHTML;
  Object.defineProperty(exports, '__esModule', { value: true });
}));
