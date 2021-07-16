export default function encodeHTML (s) {
  try {
    const ENC_CHARS = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '/':'&sol;',
      '"': '&quot;',
      "'": '&apos;',
      '`':'&grave;',
      '@': '&commat;',
      '+': '&plus;'
    }

    return s.replace(/[&<>"'@+/`]/g, m => ENC_CHARS[m])
  } catch (e) {
    return e.name === 'TypeError'
      ? new Error('Invalid type or no argument passed to function')
      : e
  }
}