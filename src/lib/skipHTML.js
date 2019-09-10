export default function skipHTML(s) {
  try {

    if (typeof process === 'object' || typeof window !== 'undefined') {
      return s.replace(/<(.|\n)*?>/g, '')
    } else {
      var d = new DOMParser().parseFromString(s, "text/html");
      return d.body.textContent || ''
    }

  } catch (e) {

    return e.name === 'TypeError'
      ? new Error('Invalid type or no argument passed to function')
      : e
  }
}
