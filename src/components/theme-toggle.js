import React from "react"
import useTheme from "../hooks/use-theme"

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggle}
        suppressHydrationWarning
      />{" "}
      Dark mode
    </label>
  )
}
