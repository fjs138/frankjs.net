import React from "react"
import { themeInitScript } from "./src/theme/constants"

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <link
      key="google-fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Questrial&family=Work+Sans:wght@400;700&display=swap"
    />,
  ])

  // First in <body>: set theme class before paint / React hydration (no SSR className on body).
  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />,
  ])
}
