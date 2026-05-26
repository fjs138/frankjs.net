import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutModule from "./layout.module.scss"
import { cssModule } from "../utils/css-module"

const layoutStyles = cssModule(layoutModule)

export default function Layout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
      }}
      className={layoutStyles.container}
    >
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
