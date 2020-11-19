import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout>
        <h1>About Page</h1>
        <h2>I'm pretty cool.</h2>
        <p>
          Want to work with me? Reach out:<Link to="/contact">Contact me.</Link>
        </p>
    </Layout>
  )
}
