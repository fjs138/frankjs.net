import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Obfuscate from 'react-obfuscate';

export default function ContactPage() {

  return (
    <Layout>
      <Head title="Contact" />
      <h1>./Contact</h1>
      <p>
        Phone: <Obfuscate tel="267-977-8356" />
        <br />
        Email:{' '}
        <Obfuscate
          email="fjs138@gmail.com"
          headers={{
            subject: 'Hi Frank!',
            //cc: 'friend@coston.cool',
          }}
        />
        <br />
        Business: <a target="_blank" href='https://builtbyfrank.com'>Built By Frank</a>
      </p>
    </Layout>
  )
}
