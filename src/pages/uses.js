import React from "react"
import Layout from '../components/layout';
import Head from '../components/head';
import usestyles from './uses.module.scss';

export default function UsesPage() {
  return (
    <Layout>
      <Head title="Uses" />
      <h1>./Uses</h1>
      <h2>What I use in my daily workflow:</h2>
      <h3>🔧 Development</h3>
      <p>
        While I continue to use Windows and Linux on a regular basis, I greatly
        prefer *nix systems, particularly MacOS.
      </p>
      <p>
        I prefer IntelliJ IDE's. For light editing I like Visual Studio Code and
        Sublime Text. I use One Dark for my theme and color scheme. I've
        recently started to follow Airbnb's style guide for my coding.
      </p>
      <h3>📅️ Productivity</h3>
      <ul>
        <li>Things (GTD) </li>
        <li>Evernote (Notes)</li>
        <li>Google Calendar, Email</li>
      </ul>

      <h3>💾 Software</h3>
      <ul>
        <li>MacOS</li>
        <li>WebStorm (IDE)</li>
        <li>MS Office</li>
        <li>MS Edge (browser)</li>
        <li>Google Drive, iCloud</li>
      </ul>

      <h3>📱 Gear</h3>
      <ul>
        <li>MacBook Pro 16" (2019)</li>
        <li>Watch (S4, Stainless Steel)</li>
        <li>iPhone (11)</li>
        <li>iPad (6th)</li>
        <li>Airpods Pro</li>
        <li>Magic Keyboard & Mouse (1st)</li>
        <li>Audio-Technica AT2020 Microphone</li>
        <li>Micca PB42X Speakers</li>
        <li>Logitech C920 HD Pro Camera</li>
        <li>Staples Hyken Mesh Task Chair</li>
      </ul>
    </Layout>
  )
}
