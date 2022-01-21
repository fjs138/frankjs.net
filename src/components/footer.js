import React from 'react';
import { /* Link, */ graphql, useStaticQuery } from 'gatsby';
import facebook from '../../static/icons/facebook.svg';
import githubLogo from '../../static/icons/githubLogo.svg';
import linkedin from '../../static/icons/linkedin.svg';
import footerStyles from './footer.module.scss';
import headerStyles from './header.module.scss';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer}>

      {''}
      {data.site.siteMetadata.author}
      ,{' '}
      { /* © */ }
      2022
    </footer>
  );
}
