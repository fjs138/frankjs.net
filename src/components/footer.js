import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerModule from "./footer.module.scss"
import { cssModule } from "../utils/css-module"

const footerStyles = cssModule(footerModule)

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      {data.site.siteMetadata.author}, {new Date().getFullYear()}
    </footer>
  )
}
