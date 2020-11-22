import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function AboutPage() {
  return (
    <Layout>
      <Head title="About" />

      <h1>./About</h1>
        <h2>I'm pretty cool.</h2>
        <p>
          Want to work with me? Reach out: <Link to="/contact">Contact me.</Link>
        </p>
      <h3>// built with</h3>
      <ul>
        <li>Gatsby (React-framework)</li>
        <li>React (front-end library)</li>
        <li>GraphQL (API)</li>
        <li>Contentful (headless CMS)</li>
        <li>Netlify (hosting, deployment)</li>
      </ul>
    </Layout>
  )
}
