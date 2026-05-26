import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import profilePicture from "./feathered-min.png"
import indexModule from "./index.module.scss"
import buttonModule from "../components/ui/button.module.scss"
import badgeModule from "../components/ui/badge.module.scss"
import labelModule from "../components/ui/section-label.module.scss"
import { cssModule } from "../utils/css-module"

const styles = cssModule(indexModule)
const btn = cssModule(buttonModule)
const badge = cssModule(badgeModule)
const label = cssModule(labelModule)

const STACK = [
  { name: "TypeScript", href: "https://www.typescriptlang.org" },
  { name: "React", href: "https://react.dev" },
  { name: "Python", href: "https://www.python.org" },
  { name: "LLMs & Agents", href: null },
  { name: "Gatsby", href: "https://www.gatsbyjs.com" },
  { name: "GraphQL", href: "https://graphql.org" },
  { name: "Contentful", href: "https://www.contentful.com" },
]

const FOCUS = [
  {
    title: "AI systems",
    desc: "Agents, RAG pipelines, and production LLM integrations",
  },
  {
    title: "Full-stack",
    desc: "React front ends with robust APIs and cloud deployment",
  },
  {
    title: "Ship fast",
    desc: "Clear architecture, strong DX, and maintainable code",
  },
]

export default function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />

      <section className={`${styles.hero} page-enter`}>
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <span className={`${badge.badge} ${badge.available} page-enter-delay-1`}>
              Open to opportunities
            </span>
            <p className={`${styles.eyebrow} page-enter-delay-1`}>
              Frank J. Santaguida
            </p>
            <h1 className={`${styles.headline} page-enter-delay-1`}>
              <em>AI software engineer</em> building thoughtful products
            </h1>
            <p className={`${styles.lead} page-enter-delay-2`}>
              Philadelphia-born, based in State College. I design and ship
              intelligent software—from LLM-powered workflows to polished web
              experiences.
            </p>
            <div className={`${styles.actions} page-enter-delay-2`}>
              <a
                className={`${btn.button} ${btn.primary}`}
                href="https://builtbyfrank.com/Frank_Santaguida_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
              <Link className={`${btn.button} ${btn.secondary}`} to="/me">
                Get in touch
              </Link>
            </div>
          </div>
          <div className={`${styles.profileWrap} page-enter-delay-2`}>
            <img
              className={styles.profile}
              src={profilePicture}
              alt="Frank Santaguida"
              width={160}
              height={160}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} page-enter-delay-2`}>
        <span className={label.label}>Focus</span>
        <ul className={styles.focus}>
          {FOCUS.map((item) => (
            <li key={item.title} className={styles.focusItem}>
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} page-enter-delay-3`}>
        <span className={label.label}>Stack</span>
        <ul className={styles.stack}>
          {STACK.map((item) =>
            item.href ? (
              <li key={item.name}>
                <a
                  className={styles.pill}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ) : (
              <li key={item.name}>
                <span className={styles.pill}>{item.name}</span>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  )
}
