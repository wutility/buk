export default function skipQuotes (s) {
  return typeof s === 'string' || s instanceof String
    ? typeof process === "object" || typeof window !== "undefined" ?
      s.replace(/(["'])/g, "\\$1")
      : s.replace(/(["'])/g, "\$1")
    : new Error("Invalid type or no argument passed to function");
}