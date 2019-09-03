export default function rmBackSlashes (s) {
  return typeof s === 'string' || s instanceof String
    ? s.replace(/\\/g, '').trim()
    : new Error("Invalid type or no argument passed to function");
}