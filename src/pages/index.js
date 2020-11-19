import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

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
