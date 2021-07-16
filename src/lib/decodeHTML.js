export default function decodeHTML (s) {
  try {
    const DEC_CHARS = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&sol;': '/',
      '&quot;': '"',
      '&apos;': "'",
      '&grave;': '`',
      '&commat;': '@',
      '&plus;': '+'
    }

    return s.replace(/\&(amp|lt|gt|sol|quot|apos|grave|commat|plus)\;/g, m => DEC_CHARS[m]);

  } catch (e) {
    return e.name === 'TypeError'
      ? new Error("Invalid type or no argument passed to function")
      : e
  }
}