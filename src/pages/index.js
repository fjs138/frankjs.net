import Head from "../components/head"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LogRocket from 'logrocket';
LogRocket.init('vvy5uo/test');


export default function IndexPage() {
  return (
    <Layout>
      < Head title="Home"/>

      <h1>./Home</h1>
      <h2 id='hello'>
        Hello. I'm Frank.
      </h2>
      <p id='greet'>Full-stack developer living in beautiful Philadelphia (USA). Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}


