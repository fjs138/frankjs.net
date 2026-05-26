import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./layout.scss"
import ThemeToggle from "./theme-toggle"
import NavLink from "./nav-link"
import headerModule from "./header.module.scss"
import { cssModule } from "../utils/css-module"

const headerStyles = cssModule(headerModule)

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={`${headerStyles.header} sticky-top`}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              🏠 Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              📝 Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/me"
            >
              👨 Me
            </NavLink>
          </li>
          <li>
            <NavLink
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/uses"
            >
              🧰 Uses
            </NavLink>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
