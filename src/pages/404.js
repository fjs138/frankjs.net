import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import notFoundModule from "./404.module.scss"
import buttonModule from "../components/ui/button.module.scss"
import { cssModule } from "../utils/css-module"

const styles = cssModule(notFoundModule)
const btn = cssModule(buttonModule)

export default function NotFound() {
  return (
    <Layout>
      <Head title="404" />
      <div className={`${styles.wrap} page-enter`}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.desc}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link className={`${btn.button} ${btn.primary}`} to="/">
          Back home
        </Link>
      </div>
    </Layout>
  )
}
