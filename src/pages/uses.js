import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import usesModule from "./uses.module.scss"
import labelModule from "../components/ui/section-label.module.scss"
import { cssModule } from "../utils/css-module"

const styles = cssModule(usesModule)
const label = cssModule(labelModule)

const GEAR = [
  "MacBook Pro M5 Pro 16\" · 48GB",
  "iPhone Air",
  "Apple Watch S10 Ti",
  "MX Keys Mini + MX Master",
  "Beats Studio Pro",
  "Micca PB42X Speakers",
  "Audio-Technica AT2020",
  "Logitech C920",
  "Staples Hyken Mesh Chair",
]

export default function UsesPage() {
  return (
    <Layout>
      <Head title="Uses" />
      <header className={`${styles.header} page-enter`}>
        <span className={label.label}>Toolbox</span>
        <h1 className={styles.title}>Uses</h1>
        <p className={styles.subtitle}>
          Tools and gear behind how I work day to day.
        </p>
      </header>

      <section className={`${styles.section} page-enter-delay-1`}>
        <h2 className={styles.sectionTitle}>Development</h2>
        <div className={styles.body}>
          <p>
            <a href="https://cursor.sh" target="_blank" rel="noreferrer">
              Cursor
            </a>{" "}
            is my primary IDE, with the{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
              target="_blank"
              rel="noreferrer"
            >
              Shades of Purple
            </a>{" "}
            theme.
          </p>
          <p>
            I deploy with{" "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              Vercel
            </a>{" "}
            and{" "}
            <a href="https://netlify.com" target="_blank" rel="noreferrer">
              Netlify
            </a>
            , and document architecture with{" "}
            <a href="https://mermaid.js.org" target="_blank" rel="noreferrer">
              Mermaid
            </a>
            .
          </p>
          <p>
            I use Windows regularly but prefer <em>nix</em> systems for daily
            development.
          </p>
        </div>
      </section>

      <section className={`${styles.section} page-enter-delay-2`}>
        <h2 className={styles.sectionTitle}>Gear</h2>
        <ul className={styles.gearList}>
          {GEAR.map((item) => (
            <li key={item} className={styles.gearItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
