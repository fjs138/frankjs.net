import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import "./layout.scss"
import layoutModule from "./layout.module.scss"
import { cssModule } from "../utils/css-module"

const layoutStyles = cssModule(layoutModule)

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.shell}>
      <div className="layout-bg" aria-hidden="true" />
      <div className={layoutStyles.container}>
        <Header />
        <main className={`${layoutStyles.content} ${layoutStyles.main}`}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
