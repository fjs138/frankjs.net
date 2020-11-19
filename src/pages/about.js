import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

export default function AboutPage() {
  return (
    <div>
      < Header />
      <h1>Blog Page</h1>
      <h2>Posts will show up here later</h2>
      <p>
        Want to work with me? Reach out:<Link to="/contact">Contact me.</Link>
      </p>
      < Footer />

    </div>
  )
}
