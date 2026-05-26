import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerModule from "./footer.module.scss"
import { cssModule } from "../utils/css-module"

const footerStyles = cssModule(footerModule)

export default function Footer() {
  const data = useStaticQuery(graphql`
    query SiteAuthorFooter {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const author = data.site.siteMetadata.author

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.inner}>
        <p className={footerStyles.copy}>
          © {new Date().getFullYear()} {author}
        </p>
        <ul className={footerStyles.links}>
          <li>
            <a
              href="https://github.com/fjs138/frankjs-net"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/franksantaguida/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
