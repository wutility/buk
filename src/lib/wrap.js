export default function wrap (str, { ws, we }) {
  ws = ws || "";
  we = we || "";
  return ws + str + we
}