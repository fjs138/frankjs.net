import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


// import "./header.module.scss"
import headerStyles from "./header.module.scss"

export default function Header() {
  // data from gql api
  const data = useStaticQuery(graphql`
    query {site{siteMetadata{title}}}
  `) // tagged template literal
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/"
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>{" "}
          <li>
            <Link
              className={headerStyles.navItem}
              to="/about"
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>{" "}
          <li>
            <Link
              className={headerStyles.navItem}
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>{" "}
          <li>
            <Link
              className={headerStyles.navItem}
              to="/contact"
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
