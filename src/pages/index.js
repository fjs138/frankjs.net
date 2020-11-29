import '../styles/index.scss';
import React from 'react';
import { Link } from 'gatsby';
import LogRocket from 'logrocket';
import Layout from '../components/layout';
import Head from '../components/head';

LogRocket.init('vvy5uo/test');

export default function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />

      <h1>./Home</h1>
      <h2 id="hello">Hello. I'm Frank.</h2>
      <div id="greet">
        A software engineer living in Philadelphia, I am currently available for
        hire.
        <br />
        <br />
        {/* Got an idea you want to make a reality?{" "} */}
        {/* <Link to="/contact">Contact me.</Link> */}
        <h3>// built with</h3>
        <ul>
          <li>
            <a href="https://gatsbyjs.org" rel="noreferrer" target="_blank">
              {' '}
              Gatsby
              {' '}
            </a>
            (React-framework)
          </li>
          <li>
            <a href="https://reactjs.org" rel="noreferrer" target="_blank">
              {' '}
              React
              {' '}
            </a>
            (front-end library)
          </li>
          <li>
            <a href="https://graphql.org" rel="noreferrer" target="_blank">
              {' '}
              GraphQL
              {' '}
            </a>
            {' '}
            (API)
          </li>
          <li>
            <a href="https://contentful.com" rel="noreferrer" target="_blank">
              {' '}
              Contentful
              {' '}
            </a>
            {' '}
            (headless CMS)
          </li>
          <li>
            <a href="https://netlify.com" rel="noreferrer" target="_blank">
              {' '}
              Netlify
              {' '}
            </a>
            {' '}
            (hosting, deployment)
          </li>
          <li>
            <a href="https://github.com/fjs138/frankjs-net" rel="noreferrer" target="_blank">
              {' '}
              Github
              {' '}
            </a>
            {' '}
            (source code)
          </li>
        </ul>
      </div>
    </Layout>
  );
}
