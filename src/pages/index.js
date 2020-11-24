import '../styles/index.scss';
import Head from "../components/head"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LogRocket from "logrocket"
LogRocket.init("vvy5uo/test")

export default function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />

      <h1>./Home</h1>
      <h2 id="hello">Hello. I'm Frank.</h2>
      <div id="greet">
        A software engineer living in Philadelphia, I am currently available for
        hire.<br/><br/>
          {/*Got an idea you want to make a reality?{" "}*/}
          {/*<Link to="/contact">Contact me.</Link>*/}
        <h3>// built with</h3>
        <ul>
          <li><a href='https://gatsbyjs.org' target='_blank'> Gatsby </a>(React-framework)</li>
          <li><a href='https://reactjs.org' target='_blank'> React </a>(front-end library)</li>
          <li><a href='https://graphql.org' target='_blank'> GraphQL </a> (API)</li>
          <li><a href='https://contentful.com' target='_blank'> Contentful </a> (headless CMS)</li>
          <li><a href='https://netlify.com' target='_blank'> Netlify </a> (hosting, deployment)</li>
          <li><a href='https://github.com/fjs138/bbf-gatsby-blog' target='_blank'> Github </a> (source code)</li>
        </ul>
      </div>
    </Layout>
  )
}
