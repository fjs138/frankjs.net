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
        What do I use? The following is a list of the items I use in my daily workflow.
      </h2>
      <h3>📁 Development</h3>
      <p>I spend the majority of my time in MacOS 11. While I continue
      to use Windows, Linux, and MacOS on a regular basis, I greatly prefer Unix-like
        systems over Windows. This is especially the case when it comes to development.
        My favorite Linux distributions are Debian, Arch, and elementaryOS.</p>
      <p>I prefer to use Intellij's IDE's for whatever
      language I'm working with. For light work or editing, I really like
      Visual Studio Code and SublimeText. I use One Dark theming and color scheme.</p>
      <h3>✔️ Productivity</h3>
      <ul><li>
        Things (GTD)        </li>
        <li>Evernote (Notes)</li>
        <li>Google Calendar, Email</li></ul>

      <h3>⚙️ Software</h3>
      <ul>

        <li>WebStorm (IDE)</li>
        <li>MS Office</li>
        <li>Google Drive, iCloud</li>
        <li>Transmit (ftp)</li>
        <li>MS Edge (browser)</li>
      </ul>

      <h3>🧑🏻‍💻 Gear</h3>
      <ul>
        <li>MacBook Pro 16" (2019)</li>
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

    </Layout>
  )
}
