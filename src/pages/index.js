import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LogRocket from 'logrocket';
LogRocket.init('vvy5uo/test');

export default function IndexPage() {
  return (
    <Layout>
      <h1>Index Page</h1>
      <h2>
        I'm Frank, a full-stack developer living in beautiful Philadelphia.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}


