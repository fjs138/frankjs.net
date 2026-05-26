export const THEME_STORAGE_KEY = "darkMode"

/** Inline script: sets body class before React hydrates (must match use-theme logic). */
export const themeInitScript = `
;(function () {
  try {
    var stored = window.localStorage.getItem("${THEME_STORAGE_KEY}")
    var dark =
      stored === "true" ||
      (stored === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.body.className = dark ? "dark" : "light"
  } catch (e) {
    document.body.className = "light"
  }
})()
`
