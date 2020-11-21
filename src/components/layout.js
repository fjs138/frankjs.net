import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function Layout(props) {
  return (
    <div style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      //transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }} className={layoutStyles.container}>
      <div className={layoutStyles.content}>

        {" "}
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
