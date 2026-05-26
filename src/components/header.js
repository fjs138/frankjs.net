import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import ThemeToggle from "./theme-toggle"
import NavLink from "./nav-link"
import headerModule from "./header.module.scss"
import { cssModule } from "../utils/css-module"

const headerStyles = cssModule(headerModule)

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/me", label: "Contact" },
  { to: "/uses", label: "Uses" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`${headerStyles.header} ${scrolled ? headerStyles.scrolled : ""}`}
    >
      <div className={headerStyles.inner}>
        <Link className={headerStyles.logo} to="/">
          Frank<span>JS</span>
        </Link>
        <nav className={headerStyles.nav} aria-label="Main">
          <ul className={headerStyles.navList}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to={to}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
