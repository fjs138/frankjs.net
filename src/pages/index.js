import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

export default function IndexPage() {
  return (
    <div>
      < Header />
      <h1>Index Page</h1>
      <h2>I'm Frank, a full-stack developer living in beautiful Philadelphia.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      < Footer />

    </div>
  )
}
