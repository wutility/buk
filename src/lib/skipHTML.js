export default function skipHTML (s) {
  try {
    return s.replace(/<(.|\n)*?>/g, '')
  } catch (e) {
    return e.name === 'TypeError'
      ? new Error('Invalid type or no argument passed to function')
      : e
  }
}
