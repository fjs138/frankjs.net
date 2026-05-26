/** Unwrap CSS module exports (Gatsby 5 / webpack interop). */
export function cssModule(styles) {
  if (!styles) return {}
  if (styles.default && typeof styles.default === "object") {
    return styles.default
  }
  return styles
}
