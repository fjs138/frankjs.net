import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import usestyles from "./uses.module.scss"

export default function UsesPage() {
  return (
    <Layout>
      <Head title="Uses" />
      <h1>./Uses</h1>
      <h2>
        What do I use? The following is a list of the tools that I use on a
        daily basis.
      </h2>
      <h3>📁 OS + Hardware</h3>
      For work, I am currently running MacOS 11 Big Sur on a 2019 MacBook Pro
      16". I do have a potent Windows desktop I built, in the office, but I
      generally use my MacBook for work, with no accessories. While I continue
      to use Windows, Linux, and MacOS regularly, I greatly prefer Unix-like
      systems over Windows, and in particular, MacOS. My favorite Linux distributions are Debian, Arch, and elementaryOS.
      <h3>📑 Development</h3>I prefer to use Intellij's IDE's for whatever
      language I'm working with. For lighter work or editing I really like
      Visual Studio Code and SublimeText. I use One Dark theming and color scheme.
      <h3>✔️ Organization</h3>
      <ul><li>
        Things (GTD)        </li>
        <li>Evernote (Notes)</li>
        <li>Google Calendar, Email</li></ul>

      <h3>⚙️ Tools</h3>
      <ul>

        <li>WebStorm (IDE)</li>
        <li>MS Office</li>
        <li>Google Drive, iCloud</li>
        <li>Transmit (ftp)</li>
        <li>MS Edge (browser)</li>
      </ul>

      <h3>🧰 Gear</h3>
      <ul>
        <li>
          Watch (S4), Stainless Steel Space Black, Cellular, Leather Loop Band
        </li>
        <li>Airpods (Pro)</li>
        <li>iPad (6th)</li>
        <li>iPhone (11)</li>
        <li>Magic Keyboard & Mouse (1st)</li>
        <li>Micca PB42X Speakers</li>
        <li>Logitech C920 HD Pro Camera</li>
        <li>Audio-Technica Cardioid Condenser Microphone
          AT2020</li>
        <li>
          Staples Hyken Mesh Task Chair</li>
      </ul>

      <h3>🧱 Built With</h3>
      <ul>
        <li>Gatsby (React-framework)</li>
        <li>React (front-end library)</li>
        <li>GraphQL (API)</li>
        <li>Contentful (headless CMS)</li>
        <li>Netlify (hosting, deployment)</li>
      </ul>

    </Layout>
  )
}
