import { useCallback, useEffect, useState } from "react"
import { THEME_STORAGE_KEY } from "../theme/constants"

function getPreferredDark() {
  if (typeof window === "undefined") return false
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === "true") return true
    if (stored === "false") return false
  } catch {
    // ignore
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

/** @returns {boolean | null} null when body class not set yet */
function readThemeFromBody() {
  if (typeof document === "undefined" || !document.body) return null
  if (document.body.classList.contains("dark")) return true
  if (document.body.classList.contains("light")) return false
  return null
}

function readIsDarkFromBody() {
  const theme = readThemeFromBody()
  return theme ?? getPreferredDark()
}

function applyBodyClass(isDark) {
  if (typeof document === "undefined" || !document.body) return
  document.body.className = isDark ? "dark" : "light"
}

function getInitialIsDark() {
  const fromBody = readThemeFromBody()
  if (fromBody !== null) return fromBody
  return getPreferredDark()
}

export default function useTheme() {
  const [isDark, setIsDark] = useState(getInitialIsDark)

  useEffect(() => {
    setIsDark(readIsDarkFromBody())
  }, [])

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, String(next))
      } catch {
        // ignore
      }
      applyBodyClass(next)
      return next
    })
  }, [])

  return { isDark, toggle }
}
