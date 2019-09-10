export default function encodeHTML (s) {
  try {
    var ENC_CHARS = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }

    return s.replace(/[&<>"']/g, function (m) {
      return ENC_CHARS[m];
    })

  } catch (e) {

    return e.name === 'TypeError'
      ? new Error('Invalid type or no argument passed to function')
      : e
  }
}