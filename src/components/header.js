import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './layout.scss';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import headerStyles from './header.module.scss';

export default function Header() {
  // data from gql api
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); // tagged template literal
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
            <Link
              className={headerStyles.navItem}
              to="/"
              activeClassName={headerStyles.activeNavItem}
            >
              🏠 Home
            </Link>
          </li>
          {' '}
          <li>
            {/* <Link */}
            {/*  className={headerStyles.navItem} */}
            {/*  to="/about" */}
            {/*  activeClassName={headerStyles.activeNavItem} */}
            {/* > */}
            {/*  📢 Me */}
            {/* </Link> */}
          </li>
          {' '}
          <li>
            <Link
              className={headerStyles.navItem}
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
            >
              📝 Blog
            </Link>
          </li>
          {' '}
          <li>
            <Link
              className={headerStyles.navItem}
              to="/me"
              activeClassName={headerStyles.activeNavItem}
            >
              👨 Me
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/uses"
              activeClassName={headerStyles.activeNavItem}
            >
              🧰 Uses
            </Link>
          </li>
          <li>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                  />
                  {' '}
                  Dark mode
                </label>
              )}
            </ThemeToggler>
          </li>
        </ul>
      </nav>
    </header>
  );
}
