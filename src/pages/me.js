import React from "react"
import Obfuscate from "react-obfuscate"
import Layout from "../components/layout"
import Head from "../components/head"
import meModule from "./me.module.scss"
import labelModule from "../components/ui/section-label.module.scss"
import { cssModule } from "../utils/css-module"

const styles = cssModule(meModule)
const label = cssModule(labelModule)

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/franksantaguida/",
    text: "franksantaguida",
  },
  {
    label: "Resume",
    href: "https://builtbyfrank.com/Frank_Santaguida_Resume.pdf",
    text: "Download PDF",
  },
  {
    label: "GitHub",
    href: "https://github.com/fjs138",
    text: "@fjs138",
  },
  {
    label: "Services",
    href: "https://builtbyfrank.com",
    text: "builtbyfrank.com",
  },
]

export default function MePage() {
  return (
    <Layout>
      <Head title="Contact" />
      <header className={`${styles.header} page-enter`}>
        <span className={label.label}>Contact</span>
        <h1 className={styles.title}>Let&apos;s connect</h1>
        <p className={styles.subtitle}>
          Hiring, consulting, or just want to say hello—I&apos;d love to hear from
          you.
        </p>
      </header>

      <ul className={`${styles.grid} page-enter-delay-1`}>
        <li>
          <div className={styles.card}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>
              <Obfuscate tel="267-977-8356" />
            </span>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>
              <Obfuscate
                email="fjs138@gmail.com"
                headers={{ subject: "Hi Frank!" }}
              />
            </span>
          </div>
        </li>
        {LINKS.map((item) => (
          <li key={item.label}>
            <a
              className={styles.card}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
